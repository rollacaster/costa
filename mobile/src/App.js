import React, {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native'

import { createCost } from './storage'

import Category from './components/Category'
import Inputs from './components/Inputs'
import Actions from './components/Actions'

import {primary, fontSize} from './style'

const styles = StyleSheet.create({
  container: {
    flex: 12,
    marginTop: 60,
    backgroundColor: '#FCFCFC',
    borderTopWidth: 1
  },
  navContainer: {
    flex: 1,
    backgroundColor: primary
  },
  upperContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  categoryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  inputContainer: { flex: 3, justifyContent: 'center' },
  actionsContainer: { flex: 2, alignItems: 'center' },
  title: {
    marginTop: 4,
    fontSize
  }
})

const App = React.createClass({
  getInitialState () {
    return {
      categories: [
        'Food',
        'Shopping',
        'Driving',
        'Internet',
        'Mobile',
        'Presents',
        'Rent',
        'Insurance'
      ],
      category: '',
      cost: '',
      newCategory: false,
      costCount: listCosts().length
    }
  },

  render () {
    const { categories, category, cost, newCategory } = this.state

    return (
      <Navigator
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={{
              LeftButton () {},
              RightButton () {},
              Title () {
                return <Text style={styles.title}>Costa</Text>
              }
            }}/>
        }
        renderScene={() => (
          <View style={styles.container}>
            <View style={styles.upperContainer}>
              <View style={styles.categoryContainer}>
                {categories.map((category) => (
                  <Category
                    onPress={() => this.setState({category, newCategory: false})}
                    name={category}
                    key={category}
                    selected={this.state.category}
                    />
                ))}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Inputs
                newCategory={newCategory}
                onNewCategoryPress={() => this.setState({newCategory: true, category: ''})}
                onCostChange={(cost) => this.setState({cost})}
                onCategoryChange={(category) => this.setState({category})}
                cost={cost}
                categoyr={category}/>
            </View>
            <View style={styles.actionsContainer}>
              <Actions
                newCost={category && cost}
                onAction={category && cost
                          ? () => createCost({cost, category})
                          : () => console.log('sync')}/>
            </View>
          </View>
        )}/>
    )
  }
})

export default App
