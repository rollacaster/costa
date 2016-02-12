import React from 'react'
import Radium from 'radium'

import config from '../config'
import { getCategories, getCostsPerMonthAndCategory, getCostsPerMonth } from './functions/costFunctions'
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

const App = React.createClass({
  getInitialState () {
    return {
      costs: {}
    }
  },

  render () {
    const { costs } = this.state
    return (
      <div>
        <h1 style={{paddingLeft: 20}}>Costa</h1>
        <div style={styles.container}>
          <CostOverview costs={getCostsPerMonthAndCategory(costs)} />
          <CostForm categories={getCategories(costs)} connection={this.ws}/>
        </div>
        <CostDetails costs={getCostsPerMonth(costs)} connection={this.ws} />
      </div>
    )
  },

  componentDidMount () {
    this.ws = new WebSocket(config.ws)

    this.ws.onopen = () => {
      console.log(`Connected to ${config.ws}`)
      this.ws.onmessage = msg => this.setState(JSON.parse(msg.data))
    }
  },

  componentWillUnmount () {
    this.ws.close()
  }
})

export default Radium(App)
