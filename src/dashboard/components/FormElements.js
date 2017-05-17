import React from 'react';
import createReactClass from 'create-react-class';
import Formsy from 'formsy-react'
import PropTypes from 'prop-types';
import Radium from 'radium'

import {
  NumberInput,
  TextInput,
  SelectableButton,
  AddIconButton
} from './UI'

export const TextFormInput = Radium(createReactClass({
  displayName: 'TextFormInput',
  mixins: [Formsy.Mixin],

  render () {
    return (
      <TextInput
        style={this.props.style}
        textAlign={this.props.textAlign}
        value={this.getValue()}
        onChange={({target}) => this.setValue(target.value)}/>
    )
  },
}))

export const NumberFormInput = Radium(createReactClass({
  displayName: 'NumberFormInput',
  mixins: [Formsy.Mixin],

  render () {
    return (
      <NumberInput
        value={this.getValue()}
        onChange={({target}) => this.setValue(target.value)}/>
    )
  },
}))

export const RadioFormButtons = Radium(createReactClass({
  displayName: 'RadioFormButtons',

  propTypes: {
    buttons: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    onNewElementClick: PropTypes.func,
    onRadioButtonClick: PropTypes.func,
    newElement: PropTypes.bool
  },

  mixins: [Formsy.Mixin],

  render () {
    const { buttons, newElement, onNewElementClick, onRadioButtonClick } = this.props

    return (
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {
            buttons.map((button) => <SelectableButton
              key={button}
              style={{margin: 5}}
              onClick={() => {
                onRadioButtonClick()
                this.setValue(button)
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
            onChange={(e) => this.setValue(e.currentTarget.value)}/>
          <AddIconButton
            style={{float: 'right', display: newElement ? 'none' : 'block'}}
            onClick={() => {
              this.setValue('')
              onNewElementClick()
            }}/>
        </div>
      </div>
    )
  },
}))
