import React from 'react'

import config from '../config'
import { getCategories } from './functions/costFunctions'
import CostList from './components/CostList'
import CostForm from './components/CostForm'

const styles = {
  container: {
    display: 'flex',
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
          <CostList costs={costs} />
          <CostForm categories={getCategories(costs)}/>
        </div>
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

export default App
