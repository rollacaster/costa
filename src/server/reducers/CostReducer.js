import { Map, notSetValue } from 'immutable'

import { CREDATE_COSTS } from '../../actions'

export default function costs (state = Map(), action) {
  switch (action.type) {
    case CREDATE_COSTS:
      if (state.get(action.category) === notSetValue) {
        return state.set(action.category, action.cost)
      } else {
        return state.set(action.category, action.cost + state.get(action.category))
      }
      break
    default:
      return state
  }
}
