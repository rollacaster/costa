import React from 'react'

import testUtils from '../test'
const { createRenderer, expect } = testUtils

import App from './App'

describe('App', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(<App />)
    output = renderer.getRenderOutput()
  })

  it('should be a div', () => {
    expect(output.type).to.be.equal('div')
  })

  it('should render', () => {
    expect(output).to.be.include('Hello World')
  })
})
