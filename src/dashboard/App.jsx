import React, { PropTypes } from 'react'

import CostList from './components/CostList'

const styles = {
  container: {
    display: 'flex'
  }
}

const App = props => {
  return (
      <div style={styles.container}>
        <CostList costs={props.costs} />
      </div>
  )
}

App.propTypes = {
  costs: PropTypes.shape({
    category: PropTypes.string,
    cost: PropTypes.number
  })
}

export default App
