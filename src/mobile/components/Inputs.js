import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, TextInput, Image, TouchableHighlight } from 'react-native'

import { fontSize, primary, accented } from '../style'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15
  },
  textInput: {
    fontSize,
    backgroundColor: primary,
    borderWidth: 2,
    height: 40,
    opacity: 0.8,
    textAlign: 'center',
    borderRadius: 10
  },
  imageContainer: {
    backgroundColor: primary,
    borderRadius: 50,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: '#ccc'
  },
  addButton: {
    width: 40,
    height: 40
  }
})

const Inputs = ({newCategory,
                 onNewCategoryPress,
                 onCostChange,
                 onCategoryChange,
                 cost,
                 category}) => (
  <View style={styles.container}>
    {!newCategory
     ? (
      <TouchableHighlight
        style={styles.imageContainer}
        onPress={onNewCategoryPress}
        underlayColor={accented}>
        <Image style={[styles.addButton]} source={require('../images/plus.png')}/>
      </TouchableHighlight>
     ) : (
      <TextInput
        value={category}
        style={[styles.textInput]}
        placeholder='Category'
        onChangeText={onCategoryChange}/>
     )}
    <TextInput
      value={cost}
      style={[styles.textInput]}
      placeholder='Cost'
      onChangeText={onCostChange}
      keyboardType='numeric'/>
  </View>
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
