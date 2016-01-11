import http from 'http'
import ws from 'ws'

import app from './app'
import store from './store'
import config from '../config'

const port = process.env.PORT || config.port
app.set('port', port)

const server = http.createServer(app)
server.on('error', err => console.log(`Could not start server: ${err}`))

const wss = new ws.Server({ server })
wss.on('connection', ws => {
  ws.send(JSON.stringify(store.getState()))

  ws.on('message', (msg) => {
    store.dispatch(JSON.parse(msg))
    wss.clients.forEach(ws => ws.send(JSON.stringify(store.getState())))
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
  server.close(cb)
}
