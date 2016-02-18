import { expect } from 'chai'
import path from 'path'

import migrateFromCSV from './migrateFromCSV'

describe('Migration', () => {
  describe('from CSV file', () => {
    let actions
    beforeEach(() => {
      actions = migrateFromCSV(path.join(__dirname, '/migration.fixture.txt'))
    })

    it('should create an action', (done) => {
      actions.each((action) => {
        expect(action.id).to.be.ok
        expect(action.time).to.be.ok
        expect(action.type).to.be.equal('CREATE_COST')
        expect(action.category).to.equal('Food')
        expect(action.cost).to.equal(1.12)
        done()
      })
    })
  })
})
