import React from 'react'

import { createRenderer, expect } from '../../test'

import CostStream from './CostStream'

import {
  Card,
  CardText,
  CardActions,
  LinkButton,
  Attribute
} from './UI'

describe('CostStream', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(
      <CostStream costs= {[
        { id: '1', category: 'Food', cost: 1, time: new Date('02-01-2016') }
      ]}/>
    )

    output = renderer.getRenderOutput()
  })

  describe('CostStream', () => {
    it('should render one cost entry', () => {
      expect(output).to.be.deep.equal(
        <div>
          <Card>
            <CardText>
              <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                <Attribute attribute='Cost' value='1'/>
                <Attribute attribute='Category' value='Food'/>
                <Attribute attribute='Time' value='01.02.2016'/>
              </div>
            </CardText>
            <CardActions>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <LinkButton text='Edit' onClick={_ => {}}/>
                <LinkButton text='Delete'onClick={_ => {}}/>
              </div>
            </CardActions>
          </Card>
        </div>
      )
    })
  })
})
