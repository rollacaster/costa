import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  AppState,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'

import {
  createCost,
  listCosts,
  deleteCosts,
  listCategorys,
  deleteCategorys
} from './storage'
import sync from './sync'

import Category from './components/Category'
import Inputs from './components/Inputs'
import Actions from './components/Actions'

import { primary, fontSize, accented } from './style'

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    backgroundColor: primary,
    borderBottomWidth: 2
  },
  categoryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize
  },
  imageContainer: {
    backgroundColor: primary,
    borderRadius: 50,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: '#ccc'
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
  addButton: {
    width: 40,
    height: 40
  }
})

class App extends React.Component {
  state = {
    categorys: [],
    category: '',
    cost: '',
    newCategory: false,
    costCount: listCosts().length
  }

  render() {
    const { categorys, category, cost, newCategory } = this.state
    const isValidCost = category !== '' && cost !== ''

    return (
      <Navigator
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={{
              LeftButton() {},
              RightButton() {},
              Title() {
                return <Text style={styles.title}>Costa</Text>
              }
            }}
          />
        }
        renderScene={() => (
          <View
            style={{ paddingTop: '20%', flex: 1, justifyContent: 'flex-start' }}
          >
            <Inputs
              newCategory={newCategory}
              onCostChange={cost => this.setState({ cost })}
              cost={cost}
            />
            <View style={styles.categoryContainer}>
              {categorys.length > 0
                ? categorys
                    .slice(0, 8)
                    .map(category => (
                      <Category
                        onPress={() =>
                          this.setState({ category, newCategory: false })}
                        name={category}
                        key={category}
                        selected={this.state.category}
                      />
                    ))
                : <Text>Please connect to costa to view categories</Text>}
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                margin: 15,
                height: 60
              }}
            >
              {newCategory
                ? <TextInput
                    value={category}
                    style={[styles.textInput]}
                    placeholder="New Category"
                    onChangeText={category => this.setState({ category })}
                  />
                : <TouchableHighlight
                    style={styles.imageContainer}
                    onPress={() =>
                      this.setState({ newCategory: true, category: '' })}
                    underlayColor={accented}
                  >
                    <Image
                      style={[styles.addButton]}
                      source={require('./images/plus.png')}
                    />
                  </TouchableHighlight>}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Actions
                newCost={isValidCost}
                onAction={
                  isValidCost
                    ? () => {
                        createCost({ cost: parseFloat(cost), category })
                        this.syncCosts()
                        this.setState({
                          cost: '',
                          category: '',
                          costCount: listCosts().length,
                          newCategory: false
                        })
                      }
                    : this.syncCosts
                }
                costCount={listCosts().length}
              />
            </View>
          </View>
        )}
      />
    )
  }

  syncCosts = () => {
    sync({ costs: listCosts(), update: this.setState.bind(this) })
      .then(isSynced => {
        this.setState({ costCount: listCosts().length })
        if (isSynced) {
          deleteCosts()
          deleteCategorys()
        } else {
          this.setState({
            categorys: Object.keys(listCategorys())
              .map(categoryKey => listCategorys()[categoryKey])
              .map(({ name }) => name)
          })
        }
      })
      .catch(err => console.error(`Could not sync costs due to ${err}`))
  }

  componentDidMount() {
    this.syncCosts()
    AppState.addEventListener('change', appState => {
      if (appState === 'active') {
        this.syncCosts()
      }
    })
  }
}

export default App
