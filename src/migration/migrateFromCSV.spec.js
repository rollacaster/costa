import { expect } from 'chai'

import migrateFromCSV from './migrateFromCSV'

describe('Migration', () => {
  describe('from CSV file', () => {
    let actions
    beforeEach(() => {
      actions = migrateFromCSV(__dirname + '/migration.fixture.txt')
    })

    it('should create actions', (done) => {
      actions.each(action => {
        expect(action[0].type).to.be.equal('ADD_COSTS')
        expect(action[0].category).to.be.a.string
        expect(action[0].cost).to.be.a.number
        done()
      })
    })
  })
})
