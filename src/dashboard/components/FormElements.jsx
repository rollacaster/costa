import React, { PropTypes } from 'react'
import Formsy from 'formsy-react'
import Radium from 'radium'

import {
  NumberInput,
  TextInput,
  SelectableButton,
  AddIconButton
} from './UI'

export const TextFormInput = Radium(React.createClass({
  propTypes: {
    initValue: PropTypes.string
  },

  mixins: [Formsy.Mixin],

  render () {
    return (
      <TextInput
        value={this.getValue()}
        onChange={e => this.setValue(e.currentTarget.value)}
        {...this.props}/>
    )
  },

  componentDidMount () {
    const { initValue } = this.props
    this.setValue(initValue)
  }
}))

export const NumberFormInput = Radium(React.createClass({
  propTypes: {
    initValue: PropTypes.number
  },

  mixins: [Formsy.Mixin],

  render () {
    return (
      <NumberInput
        value={this.getValue()}
        onChange={e => this.setValue(e.currentTarget.value)}
        {...this.props}/>
    )
  },

  componentDidMount () {
    const { initValue } = this.props
    this.setValue(initValue)
  }
}))

export const RadioFormButtons = Radium(React.createClass({
  propTypes: {
    buttons: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string
  },

  getInitialState () {
    return { newElement: false }
  },

  mixins: [Formsy.Mixin],

  render () {
    const { buttons } = this.props
    const { newElement } = this.state

    return (
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            buttons.map(button => <SelectableButton
                key={button}
                onClick={() => {
                  this.setValue(button)
                  this.setState({newElement: false})
                }}
                selected={button === this.getValue()}
                text={button}/>)
          }
        </div>
        <div>
          <TextInput
            id='category'
            style={{display: newElement ? 'block' : 'none'}}
            label='New Category'
            value={this.getValue()}
            onChange={e => this.setValue(e.currentTarget.value)}/>
          <AddIconButton
            style={{float: 'right', display: newElement ? 'none' : 'block'}}
            onClick={() => {
              this.setState({newElement: true})
              this.setValue('')
            }}/>
        </div>
      </div>
    )
  }
}))
