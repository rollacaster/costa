import WebSocket from 'ws'
import { expect } from 'chai'

import config from '../config'
import { credateCosts } from '../actions'

describe('Cost integration tests', () => {
  describe('Create new cost', () => {
    let ws

    beforeEach(() => {
      ws = new WebSocket(config.ws)
    })

    afterEach(done => {
      ws.on('close', () => done())
      ws.close()
    })

    it('should open a ws connection', (done) => {
      ws.on('open', () => done())
    })

    it('should receive the state', done => {
      const initState = {costs: {}}

      ws.on('message', msg => {
        expect(JSON.parse(msg)).to.be.deep.equal(initState)
        done()
      })
    })

    it('should receive the updated state', done => {
      ws.on('open', () => {
        ws.on('message', msg => {
          const state = JSON.parse(msg)
          const hasChildren = Object.keys(state.costs).length > 0

          if (hasChildren) {
            expect(JSON.parse(msg).costs).to.be.deep.equal({
              Food: 1
            })
            done()
          }
        })

        ws.send(JSON.stringify(
          credateCosts({
            category: 'Food',
            cost: 1
          })
        ))
      })
    })
  })
})
