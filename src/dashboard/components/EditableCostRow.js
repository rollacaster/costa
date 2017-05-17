import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'
import { Form } from 'formsy-react'
import moment from 'moment'

import { TextFormInput } from './FormElements'
import { Button } from './UI'

const EditableCostRow = ({id, category, cost, time, updateCost, cancelEdit}) => (
  <Form onValidSubmit={(cost) => updateCost(Object.assign(cost, {id}))}>
    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 5}}>
      <TextFormInput
        name='category'
        value={category}
        style={{flex: 1}}
        textAlign='center'
        required/>
      <TextFormInput
        name='cost'
        validations='isNumeric'
        validationError='Not a number!'
        value={cost.toFixed(2)}
        style={{flex: 1}}
        textAlign='center'
        required/>
      <span style={{flex: 1, textAlign: 'center'}}>{moment(time).format('DD.MM.YYYY HH:mm')}</span>
      <div style={{flex: 1, display: 'flex', justifyContent: 'space-around'}}>
        <Button text='Edit' type='submit'/>
        <Button type='button' text='Cancel' onClick={cancelEdit}/>
      </div>
    </div>
  </Form>
)

EditableCostRow.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  cost: PropTypes.number,
  time: PropTypes.string,
  updateCost: PropTypes.func,
  cancelEdit: PropTypes.func
}

export default Radium(EditableCostRow)
