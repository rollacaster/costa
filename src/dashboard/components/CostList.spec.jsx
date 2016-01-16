import React from 'react'

import { createRenderer, expect } from '../../test'

import CostList from './CostList'

describe('CostList', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()

    const costs = {
      1: { category: 'Food', cost: 1, time: new Date() },
      2: { category: 'Food', cost: 2, time: new Date() },
      3: { category: 'Rent', cost: 2, time: new Date() }
    }

    renderer.render(<CostList costs={costs}/>)
    output = renderer.getRenderOutput()
  })

  it('should render a head row', () => {
    expect(output).to.be.include(
      <thead>
        <tr>
          <th className='mdl-data-table__cell--non-numeric'>Category</th>
          <th>Cost</th>
        </tr>
      </thead>
    )
  })

  it('should render a cost', () => {
    expect(output).to.be.include(
      <tr>
        <td className='mdl-data-table__cell--non-numeric'>Food</td>
        <td>3.00</td>
      </tr>
    )
  })

  it('should render the total cost', () => {
    expect(output).to.be.include(
      <tr>
        <td className='mdl-data-table__cell--non-numeric'>Total</td>
        <td>5.00</td>
      </tr>
    )
  })
})
