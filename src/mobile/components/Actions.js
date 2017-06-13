import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Image, TouchableHighlight } from 'react-native'

import { accented, primary } from '../style'

import Badge from './Badge'

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: '#ccc'
  },
  image: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 50,
    height: 50
  }
})

const Actions = ({ newCost, onAction, costCount }) => (
  <TouchableHighlight
    style={[
      styles.imageContainer,
      { backgroundColor: newCost ? accented : primary }
    ]}
    onPress={onAction}
    underlayColor={newCost ? primary : accented}
  >
    <Image
      style={styles.image}
      source={
        newCost
          ? require('../images/checkMark.png')
          : require('../images/syncDone.png')
      }
    >
      {costCount ? <Badge value={costCount} /> : undefined}
    </Image>
  </TouchableHighlight>
)

Actions.propTypes = {
  newCost: PropTypes.bool,
  onAction: PropTypes.func
}

export default Actions
