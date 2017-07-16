import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { SelectableButton } from './UI'
import CostPie from './CostPie'
import { getTotalCosts } from '../functions/costFunctions'

class CostOverview extends Component {
  constructor(props) {
    super(props)
    this.state = { activeMonth: '' }
  }

  render() {
    const { activeMonth } = this.state
    const { costs } = this.props

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 1
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {Object.keys(costs).map(month =>
            <SelectableButton
              style={{ margin: 5 }}
              key={month}
              onClick={() => this.setState({ activeMonth: month })}
              selected={month === activeMonth}
            >
              {month}
            </SelectableButton>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ flex: 1 }}>
            {activeMonth && costs[activeMonth]
              ? <CostPie costs={costs[activeMonth]} />
              : ''}
          </div>
          <span style={{ flex: 1 }}>{`Total: ${getTotalCosts(
            costs[activeMonth]
          ).toFixed(2)}€`}</span>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    const { costs } = nextProps
    const { activeMonth } = this.state
    const months = Object.keys(costs)
    const initMonth = months[months.length - 1]
    if (activeMonth === '') this.setState({ activeMonth: initMonth })
  }
}

CostOverview.propTypes = {
  costs: PropTypes.object
}

export default CostOverview
