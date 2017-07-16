import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { primary, fontSize } from '../style'

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontWeight: 'bold',
    fontSize
  }
})

const Header = props =>
  <View
    style={{
      alignItems: 'center',
      paddingTop: 20,
      marginBottom: 10,
      backgroundColor: primary,
      borderBottomWidth: 2,
      borderBottomColor: 'black'
    }}
  >
    <Text style={styles.title}>Costa</Text>
  </View>

export default Header
