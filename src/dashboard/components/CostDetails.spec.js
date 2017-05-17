import React from 'react'

import { createRenderer, expect } from '../../test'

import CostDetails from './CostDetails'
import { LinkButton } from './UI'

describe('CostDetails', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()

    const costs = {
      January: [
        {id: '1', category: 'Food', cost: 3, time: new Date('01-01-2016')}
      ],
      February: [
        {id: '2', category: 'Rent', cost: 2, time: new Date('02-01-2016')}
      ]
    }

    renderer.render(<CostDetails costs={costs}/>)
    output = renderer.getRenderOutput()
  })

  describe('Appearance', () => {
    it('should render title', () => {
      expect(output).to.include(<LinkButton text='Cost Details' onClick={() => {}}/>)
    })
  })
})
