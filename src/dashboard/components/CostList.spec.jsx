import React from 'react'

import { createRenderer, expect } from '../../test'

import CostList from './CostList'
import { TableHeadText, TableCellText } from './UI'

describe('CostList', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()

    const costs = [
      { category: 'Food', cost: 3 },
      { category: 'Rent', cost: 2 }
    ]

    renderer.render(<CostList costs={costs}/>)
    output = renderer.getRenderOutput()
  })

  it('should render a head row', () => {
    expect(output).to.be.include(
      <thead _radiumDidResolveStyles>
        <tr _radiumDidResolveStyles>
          <TableHeadText>Category</TableHeadText>
          <th>Cost</th>
        </tr>
      </thead>
    )
  })

  it('should render a cost', () => {
    expect(output).to.be.include(
      <tr _radiumDidResolveStyles>
        <TableCellText>Food</TableCellText>
        <td>3.00</td>
      </tr>
    )
  })

  it('should render the total cost', () => {
    expect(output).to.be.include(
      <tr _radiumDidResolveStyles>
        <TableCellText>Total</TableCellText>
        <td>5.00</td>
      </tr>
    )
  })
})
