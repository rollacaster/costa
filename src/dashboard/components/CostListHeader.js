import React, { PropTypes } from 'react'

const CostListHeader = ({label, onSortDesc, onSortAsc}) => (
  <span>
    {label}
    <button style={{marginLeft: 5}} onClick={onSortDesc}>▼</button>
    <button onClick={onSortAsc}>▲</button>
  </span>
)

CostListHeader.propTypes = {
  label: PropTypes.string,
  onSortDesc: PropTypes.func,
  onSortAsc: PropTypes.func
}

export default CostListHeader
