import React from 'react'
import ReactDOM from 'react-dom'

import config from '../config'
import App from './App'

const ws = new WebSocket(config.ws)

ws.onopen = () => {
  console.log(`Connected to ${config.ws}, ${ws}`)

  ws.onmessage = msg => {
    ReactDOM.render(
        <App {...JSON.parse(msg.data)}/>,
      document.getElementById('content')
    )
  }
}
