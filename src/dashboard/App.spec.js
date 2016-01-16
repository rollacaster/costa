import React from 'react'

import { createRenderer, expect } from '../test'

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
})
