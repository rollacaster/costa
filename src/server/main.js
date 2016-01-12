import http from 'http'
import ws from 'ws'

import app from './app'
import config from '../config'
import { storeWSMessges } from './storage'

const port = process.env.PORT || config.port
app.set('port', port)

const server = http.createServer(app)
server.on('error', err => console.log(`Could not start server: ${err}`))

const wss = new ws.Server({ server })

let db
storeWSMessges(wss)
  .then(connection => db = connection)
  .catch(err => console.log(err))

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
  if (db) {
    db.close()
  }
}
