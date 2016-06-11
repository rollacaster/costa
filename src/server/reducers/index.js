const { combineReducers } = require('redux')

const costs = require('./CostReducer')

module.exports = combineReducers({
  costs
})
