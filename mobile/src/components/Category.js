import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

import { primary, fontSize, accented } from '../style'

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    margin: 8
  },
  text: {
    fontSize
  }
})

const Category = ({name, selected, onPress}) => (
  <TouchableHighlight
    onPress={onPress}
    style={[styles.container, {backgroundColor: selected === name ? accented : primary}]}
    underlayColor={accented}>
    <Text style={styles.text}>{name}</Text>
  </TouchableHighlight>
)

Category.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string
}

export default Category
