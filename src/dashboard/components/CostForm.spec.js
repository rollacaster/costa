import React from 'react'

import { createRenderer, expect } from '../../test'

import CostForm from './CostForm'
import { classes } from '../css'

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

  it('should render a title', () => {
    expect(output).to.include(
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>Create new cost</h2>
        </div>
    )
  })

  it('should render a category label', () => {
    expect(output).to.include(
        <div className='mdl-card__supporting-text' style={{padding: 0}}>
          Category
      </div>
    )
  })

  it('should render categories', () => {
    expect(output).to.include(
        <button style={{margin: 5}} className='mdl-button mdl-js-button mdl-button--raised mdl-button--accent'>
        Food
      </button>
    )
  })

  it('should render a cost input field', () => {
    expect(output).to.include(
        <div className={classes.textField}>
          <input className={classes.input} type='text' pattern='-?[0-9]*(\.[0-9]+)?' id='sample2' />
          <label className={classes.label} htmlFor='sample2'>Cost</label>
          <span className={classes.textFieldError}>Input is not a number!</span>
        </div>
    )
  })

  it('should render a submit button', () => {
    expect(output).to.include(
        <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
          Create
        </button>
    )
  })
})
