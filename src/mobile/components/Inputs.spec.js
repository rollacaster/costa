import React from 'react'
import { TouchableHighlight } from 'react-native'
import { spy } from 'sinon'
import { shallow } from 'enzyme'

import Inputs from './Inputs'

describe('<Inputs />', () => {
  let inputs
  let handleCostChange
  let handleCategoryChange

  beforeEach(() => {
    handleCostChange = spy()
    handleCategoryChange = spy()
    inputs = shallow(
      <Inputs
        newCategory={false}
        onCostChange={handleCostChange}
        onCategoryChange={handleCategoryChange} />
    )
  })

  it('should handle a press', () => {
    inputs.find(TouchableHighlight).first().simulate('press')
  })
})
