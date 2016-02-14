import React, { PropTypes } from 'react'
import Radium from 'radium'
import moment from 'moment'
import { Form } from 'formsy-react'

import { updateCost } from '../../actions'

import {
  CardText,
  CardActions,
  Button
} from './UI'

import {
  NumberFormInput,
  TextFormInput
} from './FormElements'

const EditCostForm = React.createClass({
  propTypes: {
    id: PropTypes.string,
    cost: PropTypes.number,
    category: PropTypes.string,
    time: PropTypes.object,
    connection: PropTypes.object,
    onFinish: PropTypes.func
  },

  getInitialState () {
    return { canSubmit: false }
  },

  editCost ({cost, category}) {
    const { connection, id, onFinish } = this.props
    const action = updateCost({id, cost, category})
    connection.send(JSON.stringify(action))
    onFinish()
  },

  render () {
    const { cost, category, time, onFinish } = this.props
    const { canSubmit } = this.state

    return (
      <Form
        onValid={_ => this.setState({canSubmit: true})}
        onInvalid={_ => this.setState({canSubmit: false})}
        onValidSubmit={this.editCost}>
        <CardText>
          <div style={{paddingLeft: 5}}>
          <NumberFormInput
             name='cost'
             id='costInput'
             validations='isNumeric'
             validationError='Not a number!'
             initValue={cost}
             style={{paddingBottom: 0}}
             required/>
          <p style={{fontWeight: 600, margin: 0}}>Cost</p>
          <TextFormInput name='category' initValue={category} style={{paddingBottom: 0}} required/>
          <p style={{fontWeight: 600, marginTop: 0}}>Category</p>
          <p style={{fontSize: 'small', marginBottom: 0}}>Last edited: {moment(time).format('DD.MM.YYYY HH:MM')}</p>
          </div>
        </CardText>
        <CardActions>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button type='submit' text='Edit' disabled={!canSubmit}/>
            <Button type='button' text='Cancel' onClick={onFinish}/>
          </div>
        </CardActions>
      </Form>
    )
  }
})

export default Radium(EditCostForm)
