const WebSocket = require('ws')
const R = require('ramda')
const { expect } = require('chai')

const config = require('../config')
const { createCost } = require('../actions')
const { getConnection } = require('../server/storage')

describe('Cost integration tests', () => {
  describe('Create new cost', () => {
    let ws

    beforeEach(() => {
      ws = new WebSocket(config.ws)
    })

    afterEach((done) => {
      getConnection()
        .then((con) => {
          con.collection('actions')
          con.dropCollection('actions')
        })
        .then(() => ws.close())
        .catch((err) => console.log('err: ', err))
      ws.on('close', () => done())
    })

    it('should open a ws connection', (done) => {
      ws.on('open', () => done())
    })

    it('should receive the state', (done) => {
      const initState = {costs: {}}

      ws.on('message', (msg) => {
        expect(JSON.parse(msg)).to.be.deep.equal(initState)
        done()
      })
    })

    it('should receive the updated state', (done) => {
      ws.on('open', () => {
        ws.on('message', (msg) => {
          const state = JSON.parse(msg)
          const hasChildren = Object.keys(state.costs).length > 0

          if (hasChildren) {
            const { costs } = JSON.parse(msg)
            expect(R.values(costs)[0].cost).to.be.equal(1)
            expect(R.values(costs)[0].category).to.be.equal('Food')
            done()
          }
        })

        ws.send(JSON.stringify(
          createCost({
            category: 'Food',
            cost: 1
          })
        ))
      })
    })
  })
})
