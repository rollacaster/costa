import React, { PropTypes } from 'react'
import moment from 'moment'

import EditCostForm from './EditCostForm'
import { removeCost } from '../../actions'

import {
  Card,
  CardText,
  CardActions,
  LinkButton,
  Attribute
} from './UI'

const CostStream = React.createClass({
  propTypes: {
    costs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      cost: PropTypes.nuber,
      time: PropTypes.date
    })),
    connection: PropTypes.object.isRequired
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
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          costs.map(({id, cost, category, time}) => {
            const { edit } = this.state
            if (edit === id) {
              const { connection } = this.props
              return (
                <Card key={id}>
                  <EditCostForm cost={cost} category={category} id={id}
                                time={time} connection={connection}
                                onFinish={_ => this.setState({edit: ''})}/>
                </Card>
              )
            }

            return (
              <Card key={id}>
                <CardText>
                  <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    <Attribute attribute='Cost' value={cost.toString()}/>
                    <Attribute attribute='Category' value={category}/>
                    <Attribute attribute='Time' value={moment(time).format('DD.MM.YYYY')}/>
                  </div>
                </CardText>
                <CardActions>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <LinkButton text='Edit' onClick={this.editCost.bind(null, id)}/>
                    <LinkButton text='Delete'onClick={this.removeCost.bind(null, id)}/>
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
