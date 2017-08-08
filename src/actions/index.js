const uuid = require('uuid')

const CREATE_COST = 'CREATE_COST'
const UPDATE_COST = 'UPDATE_COST'
const REMOVE_COST = 'REMOVE_COST'

exports.CREATE_COST = CREATE_COST
exports.UPDATE_COST = UPDATE_COST
exports.REMOVE_COST = REMOVE_COST

exports.createCost = ({ category, cost }) => ({
  type: CREATE_COST,
  id: uuid.v1(),
  time: new Date(),
  category,
  cost: parseFloat(cost.replace(',', '.'))
})

exports.updateCost = ({ id, cost, category }) => ({
  type: UPDATE_COST,
  id,
  cost: parseFloat(cost.replace(',', '.')),
  category
})

exports.removeCost = ({ id }) => ({
  type: REMOVE_COST,
  id
})
