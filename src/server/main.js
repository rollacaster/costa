import http from 'http'
import WS from 'ws'

import app from './app'
import config from '../config'
import store from './store'
import { getConnection, storeDocument, findDocuments } from './storage'

const port = process.env.PORT || config.port
app.set('port', port)

const server = http.createServer(app)
server.on('error', err => console.log(`Could not start server: ${err}`))

const wss = new WS.Server({ server })

// Load stored actions
findDocuments({ collection: 'actions' })
  .then(actions => actions.forEach(action => store.dispatch(action)))

wss.on('connection', ws => {
  ws.send(JSON.stringify(store.getState()))

  ws.on('message', msg => {
    const action = JSON.parse(msg)
    storeDocument({ collection: 'actions', document: action }).then(_ => {
      store.dispatch(action)
      wss.clients.forEach(ws => ws.send(JSON.stringify(store.getState())))
    }).catch(err => console.log(`Could not save ${action} due to ${err}`))
  })
})

export function listen (cb) {
  server.on('listening', () => {
    console.log(`Listening on port ${port}`)

    if (cb) {
      cb()
    }
  })

  server.listen(port)
}

export function stop (cb) {
  getConnection().then(con => {
    con.close()
    server.close(cb)
  })
}
