import React, { PropTypes } from 'react'
import { Form } from 'formsy-react'
import Radium from 'radium'

import { createCost } from '../../actions'

import {
  Card,
  CardTitle,
  CardText,
  Button
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
    return { canSubmit: false, newCategory: false }
  },

  propTypes: {
    categories: PropTypes.arrayOf(PropTypes.string),
    connection: PropTypes.object
  },

  createCost ({category, cost}) {
    const { connection } = this.props

    const action = createCost({category, cost})
    connection.send(JSON.stringify(action))
    this.setState({newCategory: false})
    this.refs.form.reset()
  },

  render () {
    const { canSubmit, newCategory } = this.state
    const { categories } = this.props

    return (
     <div style={{display: 'flex', justifyContent: 'center', height: '100%', flex: 1}}>
       <Card>
         <CardTitle text='Create new cost' />
         <Form
             ref='form'
             style={styles.form}
             onValid={_ => this.setState({canSubmit: true})}
             onInvalid={_ => this.setState({canSubmit: false})}
             onValidSubmit={this.createCost}>
           <CardText text='Category' />
           <RadioFormButtons
             name='category'
             buttons={categories}
             newElement={newCategory}
             onNewElement={() => this.setState({newCategory: true})}
             required/>
           <NumberFormInput
             name='cost'
             id='costInput'
             label='Cost'
             validations='isNumeric'
             validationError='Not a number!'
             required/>
           <Button type='submit' text='Create' disabled={!canSubmit}/>
         </Form>
       </Card>
     </div>
   )
  }
})

export default Radium(CostForm)
