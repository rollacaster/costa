import React, {
  StyleSheet,
  View,
  Text
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryContainer: { flex: 2 },
  inputContainer: { flex: 1 },
  actionsContainer: { flex: 1 }
})

const App = () => (
  <View style={styles.container}>
    <View style={styles.container}><Text>Categories</Text></View>
    <View style={styles.container}><Text>Inputs</Text></View>
    <View style={styles.container}><Text>Actions</Text></View>
  </View>
)

export default App
