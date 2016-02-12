import React from 'react'
import { createRenderer, expect } from '../../test'

import { SelectableButton } from './UI'
import CostOverview from './CostOverview'

describe('CostOverview', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(<CostOverview costs={{
      January: [
        {category: 'Food', costs: 3}
      ],
      February: [
        {category: 'Rent', costs: 2}
      ]
    }} />)
    output = renderer.getRenderOutput()
  })

  describe('Appearance', () => {
    it('should render all months', () => {
      expect(output).to.include(
        <SelectableButton onClick={() => {}} selected={false} text='January' style={{margin: 5}}/>
      )
    })
  })
})
