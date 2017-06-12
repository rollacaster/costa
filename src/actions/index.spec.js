const { expect } = require('chai')

const actions = require('./index')

describe('Action Creators', () => {
  describe('createCost', () => {
    it('should create a new cost action', () => {
      const createAction = actions.createCost({
        category: 'Test',
        cost: 2
      })

      const { type, id, time, category, cost } = createAction
      expect(type).to.be.equal('CREATE_COST')
      expect(id).to.be.ok()
      expect(time).to.be.ok()
      expect(category).to.be.equal('Test')
      expect(cost).to.be.equal(2)
    })
  })

  describe('updateCost', () => {
    it('should update a new cost action', () => {
      const updateAction = actions.updateCost({
        id: '123',
        cost: 5,
        category: 'test'
      })

      const { type, id, cost, category } = updateAction
      expect(type).to.be.equal('UPDATE_COST')
      expect(id).to.be.equal('123')
      expect(cost).to.be.equal(5)
      expect(category).to.be.equal('test')
    })
  })

  describe('removeCost', () => {
    it('should remove a new cost action', () => {
      const removeAction = actions.removeCost({
        id: '123'
      })

      const { type, id } = removeAction
      expect(type).to.be.equal('REMOVE_COST')
      expect(id).to.be.equal('123')
    })
  })
})
