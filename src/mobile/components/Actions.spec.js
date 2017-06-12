import React from 'react'
import { TouchableHighlight } from 'react-native'
import { expect } from 'chai'
import { spy } from 'sinon'
import { shallow } from 'enzyme'

import Actions from './Actions'

describe('<Actions />', () => {
  let actions
  let handleAction

  beforeEach(() => {
    handleAction = spy()
    actions = shallow(<Actions newCost={false} onAction={handleAction} />)
  })

  it('should handle a press', () => {
    actions.find(TouchableHighlight).first().simulate('press')
    expect(handleAction.calledOnce).to.equal(true)
  })
})
