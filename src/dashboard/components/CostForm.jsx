import React, { PropTypes } from 'react'
import { Form } from 'formsy-react'
import Radium from 'radium'

import { createCost } from '../../actions'

import {
  Card,
  CardTitle,
  CardText,
  Button,
  AddIconButton
} from './UI'

import {
  NumberFormInput,
  RadioFormButtons
} from './FormElements'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  }
}

const CostForm = React.createClass({
  getInitialState () {
    return { canSubmit: false }
  },

  propTypes: {
    categories: PropTypes.arrayOf(PropTypes.string),
    connection: PropTypes.object
  },

  createCost ({category, cost}) {
    const { connection } = this.props

    const action = createCost({category, cost})
    connection.send(JSON.stringify(action))
  },

  render () {
    const { canSubmit } = this.state
    const { categories } = this.props

    return (
     <div style={{display: 'flex', justifyContent: 'center', padding: 10, height: '100%'}}>
       <Card>
         <CardTitle text='Create new cost' />
         <Form
             style={styles.form}
             onValid={_ => this.setState({canSubmit: true})}
             onInvalid={_ => this.setState({canSubmit: false})}
             onValidSubmit={this.createCost}>
           <CardText text='Category' />
           <div style={{display: 'flex', flexWrap: 'wrap'}}>
           <RadioFormButtons name='category' buttons={categories} required/>
           </div>
           <div>
             <AddIconButton />
           </div>
           <NumberFormInput
             name='cost'
             id='costInput'
             label='Cost'
             validations='isNumeric'
             validationError='Not a number!'
             required/>
           <Button text='Create' disabled={!canSubmit}/>
         </Form>
       </Card>
     </div>
   )
  }
})

export default Radium(CostForm)
