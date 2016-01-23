import { expect } from 'chai'

import costs from './CostReducer'
import { createCost } from '../../actions'

describe('CostReducer', () => {
  describe('Create action', () => {
    it('creates a new cost entry', () => {
      const state = costs(undefined, createCost({
        category: 'Food',
        cost: 1
      })).toArray()

      expect(state[0].category).to.be.equal('Food')
      expect(state[0].cost).to.be.equal(1)
      expect(state[0].time).to.be.ok
    })
  })

  describe('Unknown action', () => {
    it('returns the current state', () => {
      expect(costs({Food: 1}, {type: 'unknown'})).to.be.deep.equal({Food: 1})
    })
  })
})
