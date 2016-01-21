import React from 'react'

import config from '../config'
import CostList from './components/CostList'

const styles = {
  container: {
    display: 'flex'
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
      <div style={styles.container}>
        <CostList costs={costs} />
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
