import React, { PropTypes } from 'react'
import Formsy from 'formsy-react'

import {
  NumberInput,
  SelectableButton
} from './UI'

export const NumberFormInput = React.createClass({
  mixins: [Formsy.Mixin],

  render () {
    return (
      <NumberInput
        value={this.getValue()}
        onChange={e => this.setValue(e.currentTarget.value)}
        {...this.props}/>
    )
  }
})

export const RadioFormButtons = React.createClass({
  propTypes: {
    buttons: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string
  },

  mixins: [Formsy.Mixin],

  render () {
    const { buttons } = this.props

    return (
      <div>
        {
          buttons.map(button => <SelectableButton
              key={button}
              onClick={this.setValue.bind(null, button)}
              selected={button === this.getValue()}
              text={button}/>)
        }
      </div>
    )
  }
})

