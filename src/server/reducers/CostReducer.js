import { Map } from 'immutable'

import { CREATE_COST } from '../../actions'

export default function costs (state = Map(), {id, type, cost, category, time}) {
  switch (type) {
    case CREATE_COST:
      return state.set(id, {cost, category, time})
    default:
      return state
  }
}
