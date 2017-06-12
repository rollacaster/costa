import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Button } from './UI'

const EditableCostRow = ({
  id,
  category,
  cost,
  time,
  saveCost,
  updateCost,
  updateCategory,
  cancelEdit
}) => (
  <form>
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
        style={{ flex: 1 }}
        onChange={e => updateCategory(e.target.value)}
      />
      <input
        name="cost"
        type="number"
        value={cost.toFixed(2)}
        style={{ flex: 1 }}
        onChange={e => updateCost(e.target.value)}
      />
      <span style={{ flex: 1, textAlign: 'center' }}>
        {moment(time).format('DD.MM.YYYY HH:mm')}
      </span>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
        <Button text="Edit" type="submit" onClick={saveCost} />
        <Button type="button" text="Cancel" onClick={cancelEdit} />
      </div>
    </div>
  </form>
)

EditableCostRow.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  cost: PropTypes.number,
  time: PropTypes.string,
  updateCost: PropTypes.func,
  cancelEdit: PropTypes.func
}

export default EditableCostRow
