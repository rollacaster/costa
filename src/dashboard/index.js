import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './App'
import CostForm from './components/CostForm'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/form' component={CostForm} />
  </Router>
), document.getElementById('content'))

