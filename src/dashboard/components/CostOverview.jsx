import React, { PropTypes } from 'react'

import { SelectableButton } from './UI'
import CostList from './CostList'

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
      <div>
        {
          Object.keys(costs).map(month => (
            <SelectableButton
               style={{margin: 5}}
               key={month}
               onClick={() => this.setState({activeMonth: month})}
               selected={month === activeMonth}
               text={month} />
          ))
        }
        {
          activeMonth
          ? <CostList costs={costs[activeMonth]}/>
          : ''
        }
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
