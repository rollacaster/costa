import { expect } from '../../test'

import {
  getCategories,
  getTotalCosts,
  getCostsPerCategory,
  getCostsPerMonth,
  getCostsPerMonthAndCategory
} from './costFunctions'

describe('Cost functions', () => {
  const costs = {
    1: { category: 'Food', cost: 1, time: new Date('01-01-2016') },
    2: { category: 'Food', cost: 2, time: new Date('01-01-2016') },
    3: { category: 'Rent', cost: 2, time: new Date('02-02-2016') }
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

  describe('getCostsPerMonth', () => {
    it('should group all costs per category', () => {
      expect(getCostsPerMonth(costs)).to.be.deep.equal({
        January: [
          {category: 'Food', cost: 1, time: new Date('01-01-2016')},
          {category: 'Food', cost: 2, time: new Date('01-01-2016')}
        ],
        February: [
          {category: 'Rent', cost: 2, time: new Date('02-02-2016')}
        ]
      })
    })
  })

  describe('getCostsPerMonthAndCategory', () => {
    it('should group all costs per category', () => {
      expect(getCostsPerMonthAndCategory(costs)).to.be.deep.equal({
        January: [
          {category: 'Food', costs: 3}
        ],
        February: [
          {category: 'Rent', costs: 2}
        ]
      })
    })
  })
})
