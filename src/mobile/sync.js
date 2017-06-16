import config from '../config'
import { createCost } from '../actions'
import { createCategory } from './storage'

const open = (url, update) =>
  new Promise((resolve, reject) => {
    const ws = new WebSocket(url)
    ws.onmessage = msg => {
      console.log({ msg })
      const { costs } = JSON.parse(msg.data)
      const categorys = [
        ...Object.keys(costs)
          .map(costKey => costs[costKey])
          .reduce(
            (categories, cost) => categories.add(cost.category),
            new Set()
          )
      ]
      update({ categorys })
      categorys.forEach(category => createCategory({ name: category }))
    }
    ws.onopen = () => resolve(ws)
    ws.onerror = e => !console.log(e.message) && resolve(false)
  })

const close = connection =>
  new Promise((resolve, reject) => {
    connection.onclose = () => resolve()
    connection.onerror = err => reject(err)
    connection.close()
  })

const send = (msg, connection) =>
  new Promise(resolve => connection.send(JSON.stringify(msg), resolve()))

export default ({ costs = {}, update = () => {} }) => {
  return open(config.ws, update)
    .then(connection => {
      if (!connection) {
        return false
      }
      return Promise.all(
        Object.keys(costs)
          .map(costKey => costs[costKey])
          .map(({ cost, category, date }) =>
            createCost({ cost, category, date })
          )
          .map(costAction => send(costAction, connection))
          .reduce(
            (costTransmissions, costTransmission) =>
              costTransmissions.concat(costTransmission),
            []
          )
      ).then(() => {
        close(connection)
        return true
      })
    })
    .catch(err => console.log('err: ', err))
}
