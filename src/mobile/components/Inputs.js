import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import { fontSize, primary } from '../style'

const styles = StyleSheet.create({
  textInput: {
    margin: 30,
    fontSize,
    backgroundColor: primary,
    borderWidth: 2,
    height: 40,
    opacity: 0.8,
    textAlign: 'center',
    borderRadius: 10
  }
})

const Inputs = ({ onCostChange, cost, children }) => (
  <TextInput
    value={cost}
    style={[styles.textInput]}
    placeholder="Cost"
    onChangeText={onCostChange}
    keyboardType="numeric"
  />
)

Inputs.propTypes = {
  cost: PropTypes.string,
  category: PropTypes.string,
  newCategory: PropTypes.bool,
  onNewCategoryPress: PropTypes.func,
  onCostChange: PropTypes.func,
  onCategoryChange: PropTypes.func
}

export default Inputs
