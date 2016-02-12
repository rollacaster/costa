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
    selected: PropTypes.string,
    onNewElement: PropTypes.func,
    newElement: PropTypes.bool
  },

  mixins: [Formsy.Mixin],

  render () {
    const { buttons, newElement, onNewElement } = this.props

    return (
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            buttons.map(button => <SelectableButton
                key={button}
                style={{margin: 5}}
                onClick={() => this.setValue(button)}
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
            onClick={onNewElement}/>
        </div>
      </div>
    )
  }
}))
