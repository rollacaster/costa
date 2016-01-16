import React, { PropTypes } from 'react'

import { classes } from '../css'
import { getCostsPerCategory, getTotalCosts } from '../functions/costFunctions'

const CostList = ({costs}) => (
  <table className={classes.table}>
    <thead>
      <tr>
        <th className={classes.nonNumericTableCell}>Category</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {
        getCostsPerCategory(costs).map(({category, costs}) => (
          <tr key={category}>
            <td className={classes.nonNumericTableCell}>{category}</td>
            <td>{costs.toFixed(2)}</td>
          </tr>
        ))
      }
      <tr>
        <td className={classes.nonNumericTableCell}>Total</td>
        <td>{getTotalCosts(costs).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
)

CostList.propTypes = {
  costs: PropTypes.shape({
    category: PropTypes.string,
    cost: PropTypes.number
  })
}

export default CostList
