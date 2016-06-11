const { expect } = require('chai')
const { Map } = require('immutable')

const costs = require('./CostReducer')
const { createCost, updateCost, removeCost } = require('../../actions')

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

  describe('Update action', () => {
    it('updates a cost entry', () => {
      const startState = new Map()
      const updatedState = startState.set('123', {
        category: 'Food',
        cost: 1
      })

      const state = costs(updatedState, updateCost({
        id: '123',
        category: 'Food',
        cost: 2
      })).toArray()

      expect(state[0].category).to.be.equal('Food')
      expect(state[0].cost).to.be.equal(2)
    })
  })

  describe('Remove action', () => {
    it('removes a cost entry', () => {
      const startState = new Map()
      const updatedState = startState.set('123', {
        category: 'Food',
        cost: 1,
        time: new Date('01-01-2016')
      })

      const state = costs(updatedState, removeCost({
        id: '123'
      })).toArray()

      expect(state).to.be.empty
    })
  })

  describe('Unknown action', () => {
    it('returns the current state', () => {
      expect(costs({Food: 1}, {type: 'unknown'})).to.be.deep.equal({Food: 1})
    })
  })
})
