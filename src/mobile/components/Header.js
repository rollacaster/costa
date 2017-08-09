import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

import { primary, fontSize, accented } from '../style'

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize,
    flex: 1,
    textAlign: 'center'
  }
})

const Header = props =>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 20,
      marginBottom: 10,
      backgroundColor: primary,
      borderBottomWidth: 2,
      borderBottomColor: 'black'
    }}
  >
    <View style={{ flex: 1 }} />
    <Text style={styles.title}>Costa</Text>
    <TouchableHighlight
      underlayColor={props.newCost ? primary : accented}
      style={{ flex: 1 }}
      onPress={props.onAction}
    >
      <Text
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginRight: 10,
          fontSize,
          textAlign: 'right'
        }}
      >
        {props.newCost && 'Save'}
      </Text>
    </TouchableHighlight>
  </View>

export default Header
