import config from './config'
import { createCost } from './actions'

const wsURL = `${config.ws.url}:${config.ws.port}`

const open = (url, update) => new Promise((resolve, reject) => {
  const ws = new WebSocket(url)
  ws.onmessage = (msg) => {
    const { costs } = JSON.parse(msg.data)
    const categorys = [
      ...Object.keys(costs)
        .map((costKey) => costs[costKey])
        .reduce((categories, cost) => categories.add(cost.category), new Set())
    ]
    update({categorys})
  }
  ws.onopen = () => resolve(ws)
  ws.onerror = (err) => reject(err)
})

const close = (connection) => new Promise((resolve, reject) => {
  connection.onclose = () => resolve()
  connection.onerror = (err) => reject(err)
  connection.close()
})

const send = (msg, connection) => new Promise((resolve) =>
  connection.send(JSON.stringify(msg), resolve()))

export default ({costs = [], update = () => {}}) =>
  open(wsURL, update)
  .then((connection) => Promise.all(
    Object.keys(costs)
      .map((costKey) => costs[costKey])
      .map(({cost, category, date}) => createCost({cost, category, date}))
      .map((costAction) => send(costAction, connection))
      .reduce((costTransmissions, costTransmission) => costTransmissions.concat(costTransmission), [])
  ).then(() => connection))
  .then((connection) => close(connection))
