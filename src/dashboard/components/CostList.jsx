import React, { PropTypes } from 'react'

import { Table, TableHeadText, TableCellText } from './UI'
import { getCostsPerCategory, getTotalCosts } from '../functions/costFunctions'

const CostList = ({costs}) => (
  <Table>
    <thead>
      <tr>
        <TableHeadText>Category</TableHeadText>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {
        getCostsPerCategory(costs).map(({category, costs}) => (
          <tr key={category}>
            <TableCellText>{category}</TableCellText>
            <td>{costs.toFixed(2)}</td>
          </tr>
        ))
      }
      <tr>
        <TableCellText>Total</TableCellText>
        <td>{getTotalCosts(costs).toFixed(2)}</td>
      </tr>
    </tbody>
  </Table>
)

CostList.propTypes = {
  costs: PropTypes.shape({
    category: PropTypes.string,
    cost: PropTypes.number
  })
}

export default CostList
