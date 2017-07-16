import PropTypes from 'prop-types'
import React, { Component } from 'react'
import c3 from 'c3'

class CostPie extends Component {
  render() {
    return <div id="costPie" style={{ fill: '#efefef' }} />
  }

  componentDidMount() {
    const { costs } = this.props
    if (costs) {
      renderPie(costs)
    }
  }

  componentWillReceiveProps({ costs }) {
    renderPie(costs)
  }
}

CostPie.propTypes = {
  costs: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      costs: PropTypes.number
    })
  )
}

const renderPie = data =>
  c3.generate({
    bindto: '#costPie',
    data: {
      type: 'pie',
      columns: data.map(({ category, cost }) => [category, cost])
    },
    color: {
      pattern: [
        '#f44336',
        '#E91E63',
        '#9C27B0',
        '#3F51B5',
        '#2196F3',
        '#03A9F4',
        '#00BCD4',
        '#009688',
        '#4CAF50',
        '#8BC34A',
        '#CDDC39',
        '#FFEB3B',
        '#FFC107',
        '#FF9800',
        '#FF5722',
        '#795548',
        '#9E9E9E',
        '#607D8B'
      ]
    },
    pie: { label: { format: value => `${value.toFixed(2)}€` } },
    tooltip: { format: { value: value => `${value.toFixed(2)}€` } }
  })

export default CostPie
