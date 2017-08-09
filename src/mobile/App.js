import React from 'react'
import { View, Text, AppState, TouchableHighlight, Image } from 'react-native'

import {
  createCost,
  listCosts,
  deleteCosts,
  listCategorys,
  deleteCategorys
} from './storage'
import sync from './sync'

import Category from './components/Category'
import Header from './components/Header'
import TextInput from './components/TextInput'
import Actions from './components/Actions'

import { primary, accented } from './style'

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
      <View>
        <Header
          newCost={isValidCost}
          onAction={() => {
            createCost({
              cost: parseFloat(cost.replace(',', '.')),
              category
            })
            this.syncCosts()
            this.setState({
              cost: '',
              category: '',
              costCount: listCosts().length,
              newCategory: false
            })
          }}
        />
        <TextInput
          onChangeText={cost => this.setState({ cost })}
          value={cost}
          placeholder="Cost"
          keyboardType="numeric"
        />
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          {categorys.length > 0
            ? categorys
                .slice(0, 8)
                .map(category =>
                  <Category
                    onPress={() =>
                      this.setState({ category, newCategory: false })}
                    name={category}
                    key={category}
                    selected={this.state.category}
                  />
                )
            : <Text>Please connect to costa to view categories</Text>}
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 15
          }}
        >
          {!newCategory &&
            <TouchableHighlight
              style={{
                backgroundColor: primary,
                borderRadius: 5,
                borderWidth: 1,
                padding: 5,
                justifyContent: 'center',
                shadowOffset: { width: 3, height: 3 },
                shadowRadius: 3,
                shadowOpacity: 1,
                shadowColor: '#ccc',
                marginRight: 30
              }}
              onPress={() => this.setState({ newCategory: true, category: '' })}
              underlayColor={accented}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ height: 20, width: 20, marginRight: 5 }}
                  source={require('./images/plus.png')}
                />
                <Text>Add Category</Text>
              </View>
            </TouchableHighlight>}
        </View>
        {newCategory &&
          <TextInput
            value={category}
            placeholder="New Category"
            onChangeText={category => this.setState({ category })}
          />}
        <View
          style={{
            alignItems: 'center',
            marginTop: 15
          }}
        >
          <Actions
            newCost={isValidCost}
            onAction={
              isValidCost
                ? () => {
                    createCost({
                      cost: parseFloat(cost.replace(',', '.')),
                      category
                    })
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
    )
  }

  syncCosts = () => {
    sync({ costs: listCosts(), update: this.setState.bind(this) })
      .then(isSynced => {
        this.setState({ costCount: listCosts().length })
        if (isSynced) {
          deleteCosts()
          deleteCategorys()
        }
      })
      .catch(err => console.error(`Could not sync costs due to ${err}`))
  }

  componentDidMount() {
    this.setState({
      categorys: Object.keys(listCategorys())
        .map(categoryKey => listCategorys()[categoryKey])
        .map(({ name }) => name)
    })
    this.syncCosts()
    AppState.addEventListener('change', appState => {
      if (appState === 'active') {
        this.syncCosts()
      }
    })
  }
}

export default App
