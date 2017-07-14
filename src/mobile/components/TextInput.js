import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextInput as RNTextInput } from 'react-native'

import { fontSize, primary } from '../style'

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 30,
    marginRight: 30,
    fontSize,
    backgroundColor: primary,
    borderWidth: 2,
    height: 40,
    opacity: 0.8,
    textAlign: 'center',
    borderRadius: 10
  }
})

const TextInput = props =>
  <RNTextInput
    style={[styles.textInput]}
    underlineColorAndroid="transparent"
    {...props}
  />

TextInput.propTypes = {
  cost: PropTypes.string,
  category: PropTypes.string,
  newCategory: PropTypes.bool,
  onNewCategoryPress: PropTypes.func,
  onCostChange: PropTypes.func,
  onCategoryChange: PropTypes.func
}

export default TextInput
