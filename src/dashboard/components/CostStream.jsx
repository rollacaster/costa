import React, { PropTypes } from 'react'
import moment from 'moment'

import EditCostForm from './EditCostForm'
import { removeCost } from '../../actions'

import {
  Card,
  CardText,
  CardActions,
  CardActionButton,
  Attribute
} from './UI'

const CostStream = React.createClass({
  propTypes: {
    costs: PropTypes.object,
    connection: PropTypes.object
  },

  getInitialState () {
    return {edit: ''}
  },

  editCost (id, update) {
    this.setState({edit: id})
  },

  removeCost (id) {
    const { connection } = this.props
    const action = removeCost({id})
    connection.send(JSON.stringify(action))
  },

  render () {
    const { costs } = this.props
    return (
      <div>
        {
          Object.keys(costs).map(costKey => {
            const { cost, category, time } = costs[costKey]
            const { edit } = this.state
            if (edit === costKey) {
              const { connection } = this.props
              return (
                <Card key={costKey}>
                  <EditCostForm cost={cost} category={category} id={costKey}
                                time={time} connection={connection}
                                onFinish={_ => this.setState({edit: ''})}/>
                </Card>
              )
            }

            return (
              <Card key={costKey}>
                <CardText>
                  <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    <Attribute attribute='Cost' value={cost.toString()}/>
                    <Attribute attribute='Category' value={category}/>
                    <Attribute attribute='Time' value={moment(time).format('DD.MM.YYYY')}/>
                  </div>
                </CardText>
                <CardActions>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <CardActionButton text='Edit' onClick={this.editCost.bind(null, costKey)}/>
                    <CardActionButton text='Delete'onClick={this.removeCost.bind(null, costKey)}/>
                  </div>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    )
  }
})

export default CostStream
