import { expect } from '../../test'

import {
  getCategories,
  getTotalCosts,
  getCostsPerCategory,
  getCostsPerMonth,
  getCostsPerMonthAndCategory,
  sortCosts
} from './costFunctions'

describe('Cost functions', () => {
  const costs = {
    1: { category: 'Food', cost: 2, time: new Date('01-02-2016') },
    2: { category: 'Food', cost: 1, time: new Date('01-01-2016') },
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
        {category: 'Food', cost: 3},
        {category: 'Rent', cost: 2}
      ])
    })
  })

  describe('getCostsPerMonth', () => {
    it('should group all costs per month', () => {
      expect(getCostsPerMonth([
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') },
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') },
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') }
      ])).to.be.deep.equal({
        January: [
          {id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016')},
          {id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016')}
        ],
        February: [
          {id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016')}
        ]
      })
    })
  })

  describe('sortCosts', () => {
    it('should sort costs according to time', () => {
      expect(sortCosts({})(costs)).to.be.deep.equal([
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') },
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') },
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') }
      ])
    })

    it('should sort costs ascending according to time', () => {
      expect(sortCosts({desc: false})(costs)).to.be.deep.equal([
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') },
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') },
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') }
      ])
    })

    it('should sort costs according to costs', () => {
      expect(sortCosts({sortBy: 'cost'})(costs)).to.be.deep.equal([
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') },
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') },
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') }
      ])
    })

    it('should sort costs ascending according to costs', () => {
      expect(sortCosts({sortBy: 'cost', desc: false})(costs)).to.be.deep.equal([
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') },
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') },
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') }
      ])
    })

    it('should sort costs according to category', () => {
      expect(sortCosts({sortBy: 'category'})(costs)).to.be.deep.equal([
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') },
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') },
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') }
      ])
    })

    it('should sort costs ascending according to category', () => {
      expect(sortCosts({sortBy: 'category', desc: false})(costs)).to.be.deep.equal([
        { id: '3', category: 'Rent', cost: 2, time: new Date('02-02-2016') },
        { id: '2', category: 'Food', cost: 1, time: new Date('01-01-2016') },
        { id: '1', category: 'Food', cost: 2, time: new Date('01-02-2016') }
      ])
    })
  })

  describe('getCostsPerMonthAndCategory', () => {
    it('should group all costs per category', () => {
      expect(getCostsPerMonthAndCategory(costs)).to.be.deep.equal({
        January: [ {category: 'Food', cost: 3} ],
        February: [ {category: 'Rent', cost: 2} ]
      })
    })
  })
})
