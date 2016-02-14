import React from 'react'

import { createRenderer, expect } from '../test'

import App from './App'

// Removes missing userAgent warning
global.navigator = {userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'}

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
