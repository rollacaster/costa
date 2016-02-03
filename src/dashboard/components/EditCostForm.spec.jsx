import React from 'react'

import { createRenderer, expect } from '../../test'

import {
  Button
} from './UI'

import {
  NumberFormInput,
  TextFormInput
} from './FormElements'

import EditCostForm from './EditCostForm'

describe('EditCostForm', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(<EditCostForm cost={1} category='Food' time={new Date('01-01-2016')} />)
    output = renderer.getRenderOutput()
  })

  it('should render a number input', () => {
    expect(output).to.include(
      <NumberFormInput
         name='cost'
         id='costInput'
         validations='isNumeric'
         validationError='Not a number!'
         initValue={1}
         style={{paddingBottom: 0}}
         required/>
    )
  })

  it('should render a text input', () => {
    expect(output).to.include(
      <TextFormInput
         name='category'
         initValue='Food'
         style={{paddingBottom: 0}}
         required/>
    )
  })

  it('should render a date', () => {
    expect(output).to.include(
      <p style={{fontSize: 'small', marginBottom: 0}}>Last edited: 01.01.2016 00:01</p>
    )
  })

  it('should render an edit button', () => {
    expect(output).to.include(
      <Button text='Edit' disabled/>
    )
  })

  it('should render a cancel button', () => {
    expect(output).to.include(
      <Button text='Cancel' onClick={undefined} />
    )
  })
})
