import React, { PropTypes } from 'react'
import Radium from 'radium'

import { getTotalCosts } from '../functions/costFunctions'
import { updateCost, removeCost } from '../../actions'

import CostRow from './CostRow'
import EditableCostRow from './EditableCostRow'

const CostList = React.createClass({
  removeCost (id) {
    const { connection } = this.props
    const action = removeCost({id})
    connection.send(JSON.stringify(action))
  },

  updateCost (cost) {
    const { connection } = this.props
    connection.send(JSON.stringify(updateCost(cost)))
    this.setState({edit: ''})
  },

  render () {
    const { costs } = this.props
    const { edit } = this.state

    return (
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <span style={{textAlign: 'center'}}>Category</span>
          <span style={{textAlign: 'center'}}>Cost</span>
          <span style={{textAlign: 'center'}}>Created at</span>
          <span style={{textAlign: 'center'}}>Actions</span>
        </div>
        <hr/>
        {costs.map((cost, index) => cost.id === edit
            ? <EditableCostRow key={index} updateCost={this.updateCost} cancelEdit={() => this.setState({edit: ''})} {...cost}/>
            : <CostRow key={index} editCost={() => this.setState({edit: cost.id})} removeCost={this.removeCost} {...cost}/>
        )}
        <hr/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <span>{`Total: ${getTotalCosts(costs).toFixed(2)}`}</span>
        </div>
      </div>
    )
  }
})

CostList.propTypes = {
  costs: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    costs: PropTypes.number
  }))
}

export default Radium(CostList)
