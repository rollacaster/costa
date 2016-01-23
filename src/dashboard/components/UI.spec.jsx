import React from 'react'

import { createRenderer, expect } from '../../test'
import {
  Card,
  CardTitle,
  CardText,
  Button,
  AccentedButton,
  NumberInput
} from './UI'

describe('UI', () => {
  let output

  it('should render a Card', () => {
    const renderer = createRenderer()
    renderer.render(
        <Card>
          <div>Test</div>
        </Card>
    )
    output = renderer.getRenderOutput()
    expect(output).to.include(
      <div className='mdl-card mdl-shadow--2dp'>
        <div>Test</div>
      </div>
    )
  })

  it('should render a CardTitle', () => {
    const renderer = createRenderer()
    renderer.render(<CardTitle text='Test' />)
    output = renderer.getRenderOutput()
    expect(output).to.include(
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>Test</h2>
      </div>
    )
  })

  it('should render a CardText', () => {
    const renderer = createRenderer()
    renderer.render(<CardText text='Test' />)
    output = renderer.getRenderOutput()
    expect(output).to.include(
      <div className='mdl-card__supporting-text' style={{padding: 0}}>
        Test
      </div>
    )
  })

  it('should render a NumberInput', () => {
    const renderer = createRenderer()
    renderer.render(<NumberInput id='test' label='Test' error='Error' />)
    output = renderer.getRenderOutput()
    expect(output).to.include(
      <div className='mdl-textfield mdl-js-textfield'>
        <input className='mdl-textfield__input' type='text' pattern='-?[0-9]*(\.[0-9]+)?' id='test' />
        <label className='mdl-textfield__label' htmlFor='test'>Test</label>
        <span className='mdl-textfield__error'>Error</span>
      </div>
    )
  })

  it('should render a Button', () => {
    const renderer = createRenderer()
    renderer.render(<Button text='Test' />)
    output = renderer.getRenderOutput()
    expect(output).to.include(
      <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
        Test
      </button>
    )
  })

  it('should render an AccentedButton', () => {
    const renderer = createRenderer()
    renderer.render(<AccentedButton text='Test' />)
    output = renderer.getRenderOutput()
    expect(output).to.include(
      <button style={{margin: 5}} className='mdl-button mdl-js-button mdl-button--raised mdl-button--accent'>
        Test
      </button>
    )
  })
})
