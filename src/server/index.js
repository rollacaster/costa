import http from 'http'
import ws from 'ws'

import app from './app'
import store from './store'

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)
server.on('error', err => console.log(`Could not start server: ${err}`))
server.on('listening', () => console.log(`Listening on port ${port}`))

const wss = new ws.Server({ server })
wss.on('connection', ws => {
  ws.send(JSON.stringify(store.getState()))
})

server.listen(port)
