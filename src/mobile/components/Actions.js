import React, {
  PropTypes,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

import { accented, primary } from '../style'

import Badge from './Badge'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    padding: 10
  },
  image: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 50,
    height: 50
  }
})

const Actions = ({newCost, onAction, costCount}) => (
  <View style={{marginBottom: 0}}>
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.imageContainer, {backgroundColor: newCost ? accented : primary}]}
        onPress={onAction}
        underlayColor={newCost ? primary : accented}>
        <Image
          style={styles.image}
          source={newCost ? require('../images/checkMark.png') : require('../images/syncDone.png')}>
          {costCount ? <Badge value={costCount}/> : undefined}
        </Image>
      </TouchableHighlight>
    </View>
  </View>
)

Actions.propTypes = {
  newCost: PropTypes.bool,
  onAction: PropTypes.func
}

export default Actions
