import React from 'react'

import config from '../config'
import {
  getCategories,
  getCostsPerMonthAndCategory,
  getCostsPerMonth,
  sortCosts
} from './functions/costFunctions'
import CostOverview from './components/CostOverview'
import CostForm from './components/CostForm'
import CostDetails from './components/CostDetails'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

class App extends React.Component {
  state = {
    costs: {},
    sortBy: 'time',
    desc: true
  }

  render() {
    const { costs, sortBy, desc } = this.state
    return (
      <div
        style={{ maxWidth: '85rem', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <h1 style={{ paddingLeft: 20 }}>Costa</h1>
        <div style={styles.container}>
          <CostOverview costs={getCostsPerMonthAndCategory(costs)} />
          <CostForm categories={getCategories(costs)} connection={this.ws} />
        </div>
        <CostDetails
          costs={getCostsPerMonth(sortCosts({ sortBy, desc })(costs))}
          onSortCosts={sortParams => this.setState(sortParams)}
          connection={this.ws}
        />
      </div>
    )
  }

  componentDidMount() {
    this.ws = new WebSocket(config.ws)

    this.ws.onopen = () => {
      console.log(`Connected to ${config.ws}`)
      this.ws.onmessage = msg => this.setState(JSON.parse(msg.data))
    }
  }

  componentWillUnmount() {
    this.ws.close()
  }
}

export default App
