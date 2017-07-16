import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Button } from './UI'

class EditableCostRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: props.category,
      cost: props.cost
    }
  }

  render() {
    const { time, saveCost, cancelEdit, id } = this.props
    const { category, cost } = this.state

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: 5
          }}
        >
          <input
            type="text"
            value={category}
            style={{ flex: 1, textAlign: 'center', fontSize: '1rem' }}
            onChange={e => this.setState({ category: e.target.value })}
          />
          <input
            name="cost"
            type="text"
            value={cost}
            style={{ flex: 1, textAlign: 'center', fontSize: '1rem' }}
            onChange={e => this.setState({ cost: e.target.value })}
          />
          <span style={{ flex: 1, textAlign: 'center' }}>
            {moment(time).format('DD.MM.YYYY HH:mm')}
          </span>
          <div
            style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}
          >
            <Button
              text="Edit"
              type="button"
              onClick={() => saveCost({ id, cost, category })}
            />
            <Button type="button" text="Cancel" onClick={cancelEdit} />
          </div>
        </div>
      </div>
    )
  }
}

EditableCostRow.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  cost: PropTypes.number,
  time: PropTypes.string,
  updateCost: PropTypes.func,
  cancelEdit: PropTypes.func
}

export default EditableCostRow
