import React, {
  StyleSheet,
  View,
  Text,
  Navigator,
  AppState
} from 'react-native'

import {
  createCost, listCosts, deleteCosts,
  listCategorys, deleteCategorys
} from './storage'
import sync from './sync'

import Category from './components/Category'
import Inputs from './components/Inputs'
import Actions from './components/Actions'

import {primary, fontSize} from './style'

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#FCFCFC'
  },
  navContainer: {
    flex: 1,
    backgroundColor: primary,
    borderBottomWidth: 2
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
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize
  }
})

const App = React.createClass({
  getInitialState () {
    return {
      categorys: [],
      category: '',
      cost: '',
      newCategory: false,
      costCount: listCosts().length
    }
  },

  render () {
    const { categorys, category, cost, newCategory } = this.state
    const isValidCost = category !== '' && cost !== ''

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
                {categorys.lengith > 0 ? categorys.slice(0, 8).map((category) => (
                  <Category
                    onPress={() => this.setState({category, newCategory: false})}
                    name={category}
                    key={category}
                    selected={this.state.category}
                    />
                )) : <Text>Please connect to costa to view categories</Text>}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Inputs
                newCategory={newCategory}
                onNewCategoryPress={() => this.setState({newCategory: true, category: ''})}
                onCostChange={(cost) => this.setState({cost})}
                onCategoryChange={(category) => this.setState({category})}
                cost={cost}
                category={category}/>
            </View>
            <View style={styles.actionsContainer}>
              <Actions
                newCost={isValidCost}
                onAction={isValidCost
                          ? () => {
                            createCost({cost, category})
                            this.syncCosts()
                            this.setState({
                              cost: '',
                              category: '',
                              costCount: listCosts().length,
                              newCategory: false
                            })
                          }
                          : this.syncCosts}
                costCount={listCosts().length}/>
            </View>
          </View>
        )}/>
    )
  },

  syncCosts () {
    sync({costs: listCosts(), update: this.setState.bind(this)})
      .then((isSynced) => {
        this.setState({costCount: listCosts().length})
        if (isSynced) {
          deleteCosts()
          deleteCategorys()
        } else {
          this.setState({
            categorys: Object.keys(listCategorys())
              .map((categoryKey) => listCategorys()[categoryKey])
              .map(({name}) => name)
          })
        }
      })
      .catch((err) => console.error(`Could not sync costs due to ${err}`))
  },

  componentDidMount () {
    this.syncCosts()
    AppState.addEventListener('change', (appState) => {
      if (appState === 'active') {
        this.syncCosts()
      }
    })
  }
})

export default App
