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
        '#2196F3',
        '#E91E63',
        '#FFEB3B',
        '#9C27B0',
        '#009688',
        '#8BC34A',
        '#9E9E9E',
        '#FF9800',
        '#FFC107',
        '#4CAF50',
        '#FF5722',
        '#795548',
        '#607D8B',
        '#03A9F4',
        '#f44336',
        '#CDDC39',
        '#3F51B5',
        '#00BCD4'
      ]
    },
    pie: {
      label: {
        format: (value, _, category) => `${category} ${value.toFixed(2)}€`
      }
    },
    tooltip: { format: { value: value => `${value.toFixed(2)}€` } }
  })

export default CostPie
