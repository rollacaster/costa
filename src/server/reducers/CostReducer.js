const { Map } = require('immutable')

const { CREATE_COST, UPDATE_COST, REMOVE_COST } = require('../../actions')

module.exports = function costs (state = Map(), action) {
  const { type, id, cost, category } = action
  switch (type) {
    case CREATE_COST:
      const {time} = action
      return state.set(id, {cost, category, time})
    case UPDATE_COST:
      return state.set(id, Object.assign({}, state.get(id), {cost}, {category}))
    case REMOVE_COST:
      return state.remove(id)
    default:
      return state
  }
}
