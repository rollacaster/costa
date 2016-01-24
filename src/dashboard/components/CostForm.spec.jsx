import React from 'react'

import { createRenderer, expect } from '../../test'
import {
  RadioFormButtons
} from './FormElements'

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
      <RadioFormButtons name='category' buttons={['Food', 'Rent']} required/>
    )
  })
})
