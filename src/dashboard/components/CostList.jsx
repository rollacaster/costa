import React, { PropTypes } from 'react'
import Radium from 'radium'

import { Table, TableHeadText, TableCellText } from './UI'
import { getTotalCosts } from '../functions/costFunctions'

const CostList = ({costs = []}) => (
  <Table>
    <thead>
      <tr>
        <TableHeadText>Category</TableHeadText>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {
        costs.map(({category, cost}) => (
          <tr key={category}>
            <TableCellText>{category}</TableCellText>
            <td>{cost.toFixed(2)}</td>
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
  costs: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    costs: PropTypes.number
  }))
}

export default Radium(CostList)
