const http = require('http')
const WS = require('ws')

const httpConfiguration = require('./httpConfiguration')
const config = require('../config')
const backup = require('./backup')
const store = require('./store')
const { getConnection, storeDocument, findDocuments } = require('./storage')

const port = process.env.PORT || config.port
httpConfiguration.set('port', port)

const server = http.createServer(httpConfiguration)
server.on('error', (err) => console.log(`Could not start server: ${err}`))

const wss = new WS.Server({ server })

if (config.backup) {
  backup.start()
}

// Load stored actions
findDocuments({ collection: 'actions' })
  .then((actions) => actions.forEach((action) => store.dispatch(action)))

wss.on('connection', (ws) => {
  ws.send(JSON.stringify(store.getState()))

  ws.on('message', (msg) => {
    const action = JSON.parse(msg)
    storeDocument({ collection: 'actions', document: action }).then(() => {
      store.dispatch(action)
      wss.clients.forEach((ws) => ws.send(JSON.stringify(store.getState())))
    }).catch((err) => console.log(`Could not save ${JSON.stringify(action)} due to ${err}`))
  })
})

exports.listen = (cb) => {
  server.on('listening', () => {
    console.log(`Listening on port ${port}`)

    if (cb) {
      cb()
    }
  })

  server.listen(port)
}

exports.stop = (cb) => {
  getConnection().then((con) => {
    con.close()
    server.close(cb)
  })
}
