const uuid = require('uuid')

const CREATE_COST = 'CREATE_COST'
const UPDATE_COST = 'UPDATE_COST'
const REMOVE_COST = 'REMOVE_COST'

exports.CREATE_COST = CREATE_COST
exports.UPDATE_COST = UPDATE_COST
exports.REMOVE_COST = REMOVE_COST

exports.createCost = ({ category, cost }) => {
  return {
    type: CREATE_COST,
    id: uuid.v1(),
    time: new Date(),
    category,
    cost: parseFloat(cost)
  }
}

exports.updateCost = ({id, cost, category}) => {
  return {
    type: UPDATE_COST,
    id,
    cost: parseFloat(cost),
    category
  }
}

exports.removeCost = ({id}) => {
  return {
    type: REMOVE_COST,
    id
  }
}
