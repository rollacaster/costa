import { expect } from 'chai'

import costs from './CostReducer'
import { credateCosts } from '../../actions'

describe('CostReducer', () => {
  describe('Credate action', () => {
    it('creates a new cost entry', () => {
      expect(costs(undefined, credateCosts({
        category: 'Food',
        cost: 1
      })).toObject()).to.be.deep.equal({
        Food: 1
      })
    })

    it('updates an existing cost entry', () => {
      const state = costs(undefined, credateCosts({
        category: 'Food',
        cost: 1
      }))

      expect(costs(state, credateCosts({
        category: 'Food',
        cost: 1
      })).toObject()).to.be.deep.equal({
        Food: 2
      })
    })
  })

  describe('Unknown action', () => {
    it('returns the current state', () => {
      expect(costs({Food: 1}, {type: 'unknown'})).to.be.deep.equal({Food: 1})
    })
  })
})
