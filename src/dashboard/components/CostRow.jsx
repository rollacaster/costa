import React, { PropTypes } from 'react'
import Radium from 'radium'
import moment from 'moment'

import { Button } from './UI'

const CostRow = ({id, category, cost, time, editCost, removeCost}) => (
  <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 5}}>
    <span style={{flex: 1, textAlign: 'center'}}>{category}</span>
    <span style={{flex: 1, textAlign: 'center'}}>{cost.toFixed(2)}</span>
    <span style={{flex: 1, textAlign: 'center'}}>{moment(time).format('DD.MM.YYYY HH:MM')}</span>
    <div style={{flex: 1, display: 'flex', justifyContent: 'space-around'}}>
      <Button text='Edit' onClick={editCost}/>
      <Button text='Delete' onClick={() => removeCost(id)}/>
    </div>
  </div>
)

CostRow.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  cost: PropTypes.number,
  time: PropTypes.string,
  editCost: PropTypes.func,
  removeCost: PropTypes.func
}

export default Radium(CostRow)
