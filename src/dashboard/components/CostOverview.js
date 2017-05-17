import PropTypes from 'prop-types';
import React from 'react';

import { SelectableButton } from './UI'
import CostPie from './CostPie'
import { getTotalCosts } from '../functions/costFunctions'

const CostOverview = React.createClass({
  propTypes: {
    costs: PropTypes.object
  },

  getInitialState () {
    return { activeMonth: '' }
  },

  render () {
    const { activeMonth } = this.state
    const { costs } = this.props

    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        {
          Object.keys(costs).map((month) => (
            <SelectableButton
              style={{margin: 5}}
              key={month}
              onClick={() => this.setState({activeMonth: month})}
              selected={month === activeMonth}
              text={month} />
          ))
        }
        </div>
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <div style={{flex: 1}}>
          {
            activeMonth
            ? <CostPie costs={costs[activeMonth]}/>
            : ''
          }
          </div>
          <span style={{flex: 1}}>{`Total: ${getTotalCosts(costs[activeMonth]).toFixed(2)}€`}</span>
        </div>
      </div>
    )
  },

  componentWillReceiveProps (nextProps) {
    const { costs } = nextProps
    const { activeMonth } = this.state
    const months = Object.keys(costs)
    const initMonth = months[months.length - 1]
    if (activeMonth === '') this.setState({activeMonth: initMonth})
  }
})

export default CostOverview
