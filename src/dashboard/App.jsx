import React, { PropTypes } from 'react'

const styles = {
  container: {
    display: 'flex'
  }
}

const App = props => {
  return (
      <div style={styles.container}>
        Hello World
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
