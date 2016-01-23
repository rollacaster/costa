import React from 'react'

import { createRenderer, expect } from '../../test'
import {
  AccentedButton
} from './UI'

import CostForm from './CostForm'

describe('CostForm', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(<CostForm categories={['Food', 'Rent']} />)
    output = renderer.getRenderOutput()
  })

  it('should be a div', () => {
    expect(output.type).to.be.equal('div')
  })

  it('should render categories', () => {
    expect(output).to.include(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <AccentedButton id='Food' text='Food' />
          <AccentedButton id='Rent' text='Rent' />
        </div>
    )
  })
})
