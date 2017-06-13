import React from 'react'
import PropTypes from 'prop-types'

import { getTotalCosts } from '../functions/costFunctions'
import { updateCost, removeCost } from '../../actions'

import CostRow from './CostRow'
import CostListHeader from './CostListHeader'
import EditableCostRow from './EditableCostRow'

class CostList extends React.Component {
  state = {
    edit: ''
  }

  removeCost = id => {
    const { connection } = this.props
    const action = removeCost({ id })
    connection.send(JSON.stringify(action))
  }

  saveCost = cost => {
    const { connection } = this.props
    connection.send(JSON.stringify(updateCost(cost)))
    this.setState({ edit: '' })
  }

  render() {
    const { costs, onSortCosts } = this.props
    const { edit } = this.state

    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CostListHeader
            label="Cost"
            onSortDesc={() => onSortCosts({ sortBy: 'category', desc: true })}
            onSortAsc={() => onSortCosts({ sortBy: 'category', desc: false })}
          />
          <CostListHeader
            label="Cost"
            onSortDesc={() => onSortCosts({ sortBy: 'cost', desc: true })}
            onSortAsc={() => onSortCosts({ sortBy: 'cost', desc: false })}
          />
          <CostListHeader
            label="Cost"
            onSortDesc={() => onSortCosts({ sortBy: 'time', desc: true })}
            onSortAsc={() => onSortCosts({ sortBy: 'time', desc: false })}
          />
          <span style={{ textAlign: 'center' }}>Actions</span>
        </div>
        <hr />
        {costs.map(
          (cost, index) =>
            cost.id === edit
              ? <EditableCostRow
                  key={index}
                  saveCost={this.saveCost}
                  cancelEdit={() => this.setState({ edit: '' })}
                  {...cost}
                />
              : <CostRow
                  key={index}
                  editCost={() => this.setState({ edit: cost.id })}
                  removeCost={this.removeCost}
                  {...cost}
                />
        )}
        <hr />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span>{`Total: ${getTotalCosts(costs).toFixed(2)}`}</span>
        </div>
      </div>
    )
  }
}

CostList.propTypes = {
  costs: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      costs: PropTypes.number
    })
  ),
  onSortCosts: PropTypes.func
}

export default CostList
