import React from 'react'
import PropTypes from 'prop-types'

import { createCost } from '../../actions'

import {
  Card,
  CardTitle,
  CardText,
  Button,
  NumberInput,
  TextInput,
  SelectableButton,
  AddIconButton
} from './UI'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  }
}

class CostForm extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    connection: PropTypes.object
  }

  state = {
    newCategory: false,
    cost: '',
    category: ''
  }

  createCost = () => {
    const { connection } = this.props
    const { category, cost } = this.state
    const action = createCost({ category, cost: cost.replace(',', '.') })
    this.setState({ newCategory: false, cost: '', category: '' })
    connection.send(JSON.stringify(action))
  }

  render() {
    const { newCategory, cost, category } = this.state
    const { categories } = this.props

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          flex: 1
        }}
      >
        <Card>
          <CardTitle text="Create new cost" />
          <form style={styles.form}>
            <CardText text="Category" />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {categories.map(categoryName =>
                <SelectableButton
                  key={categoryName}
                  style={{ margin: 5 }}
                  onClick={() =>
                    this.setState({
                      newCategory: false,
                      category: categoryName
                    })}
                  selected={category === categoryName}
                >
                  {categoryName}
                </SelectableButton>
              )}
              {newCategory &&
                <TextInput
                  id="category"
                  label="New Category"
                  value={category}
                  onChange={e =>
                    this.setState({ category: e.currentTarget.value })}
                />}
            </div>
            <AddIconButton
              style={{
                float: 'right',
                display: newCategory ? 'none' : 'block'
              }}
              onClick={() => {
                this.setState({
                  newCategory: true,
                  category: ''
                })
              }}
            />
            <NumberInput
              id="costInput"
              label="Cost"
              value={cost}
              onChange={e => this.setState({ cost: e.target.value })}
            />
            <Button
              type="button"
              text="Create"
              onClick={this.createCost}
              disabled={!cost || !category}
            />
          </form>
        </Card>
      </div>
    )
  }
}

export default CostForm
