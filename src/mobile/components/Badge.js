import PropTypes from 'prop-types'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { accented } from '../style'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    width: 20,
    height: 20,
    backgroundColor: accented
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const Badge = ({ value }) => (
  <View style={styles.container}><Text style={styles.text}>{value}</Text></View>
)

Badge.propTypes = {
  value: PropTypes.number
}

export default Badge
