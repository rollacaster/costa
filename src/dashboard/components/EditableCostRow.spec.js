import React from 'react'

import EditableCostRow from './EditableCostRow'

import { spy, expect } from '../../test'
import { shallow } from 'enzyme'
import { Button } from './UI'

describe('<EditableCostRow/>', () => {
  let editableCostRow
  let handleUpdate
  let handleCancel

  beforeEach(() => {
    handleUpdate = spy()
    handleCancel = spy()
    editableCostRow = shallow(
      <EditableCostRow
        id='testId'
        cost={3.546}
        time={new Date('2016-04-07T02:30:00.000Z')}
        updateCost={handleUpdate}
        cancelEdit={handleCancel}
        />
    )
  })

  it('should handle a cancel press', () => {
    editableCostRow.find(Button).at(1).simulate('click')
    expect(handleCancel.calledOnce).to.be.true
  })
})

