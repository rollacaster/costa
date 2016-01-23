import { expect } from '../../test'

import { getCategories, getTotalCosts, getCostsPerCategory } from './costFunctions'

describe('Cost functions', () => {
  const costs = {
    1: { category: 'Food', cost: 1, time: new Date() },
    2: { category: 'Food', cost: 2, time: new Date() },
    3: { category: 'Rent', cost: 2, time: new Date() }
  }

  describe('getCategories', () => {
    it('should extract all categories', () => {
      expect(getCategories(costs)).to.be.deep.equal(
        ['Food', 'Rent']
      )
    })
  })

  describe('getTotalCosts', () => {
    it('should sum up all costs', () => {
      expect(getTotalCosts(costs)).to.be.equal(5)
    })
  })

  describe('getCostsPerCategory', () => {
    it('should group all costs per category', () => {
      expect(getCostsPerCategory(costs)).to.be.deep.equal([
        {category: 'Food', costs: 3},
        {category: 'Rent', costs: 2}
      ])
    })
  })
})
