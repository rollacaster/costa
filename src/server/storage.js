import { MongoClient } from 'mongodb'

import config from '../config'
import store from './store'

export function storeWSMessges (webSocketServer) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(config.db, (err, connection) => {
      if (err) {
        reject(`Could not connect to mongo: ${err}`)
      }

      const collection = connection.collection('actions')
      webSocketServer.on('connection', ws => {
        ws.send(JSON.stringify(store.getState()))

        ws.on('message', msg => {
          const action = JSON.parse(msg)
          collection.insert(action, (err, result) => {
            if (err) {
              console.log(`Could not save an action: ${err}`)
            }

            store.dispatch(action)
            webSocketServer.clients.forEach(ws => ws.send(JSON.stringify(store.getState())))
          })
        })
      })

      resolve(connection)
    })
  })
}
