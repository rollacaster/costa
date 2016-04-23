import React from 'react'

import CostRow from './CostRow'

import { spy, expect } from '../../test'
import { shallow } from 'enzyme'
import { Button } from './UI'

describe('<CostRow/>', () => {
  let costRow
  let handleEdit
  let handleRemove

  beforeEach(() => {
    handleEdit = spy()
    handleRemove = spy()
    costRow = shallow(
      <CostRow
        id='testId'
        cost={3.546}
        time={new Date('2016-04-07T02:30:00.000Z')}
        editCost={handleEdit}
        removeCost={handleRemove}
        />
    )
  })

  it('should handle a edit press', () => {
    costRow.find(Button).at(0).simulate('click')
    expect(handleEdit.calledOnce).to.be.true
  })

  it('should handle a remove press', () => {
    costRow.find(Button).at(1).simulate('click')
    expect(handleRemove.calledOnce).to.be.true
  })

  it('should render a time', () => {
    expect(costRow.find('span').at(2).children().text()).to.be.deep.equal('07.04.2016 04:30')
  })

  it('should render a cost', () => {
    expect(costRow.find('span').at(1).children().text()).to.be.deep.equal('3.55')
  })
})
