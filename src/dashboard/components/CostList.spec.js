import React from 'react'

import { createRenderer, expect } from '../../test'

import CostList from './CostList'

describe('CostList', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()

    const costs = [
      { category: 'Food', cost: 3, time: new Date('01-02-2016') },
      { category: 'Rent', cost: 2, time: new Date('01-02-2016') }
    ]

    renderer.render(<CostList costs={costs}/>)
    output = renderer.getRenderOutput()
  })

  describe('Functionality', () => {
    it('should compute the total cost', () => {
      expect(output).to.include(<span>Total: 5.00</span>)
    })
  })
})
