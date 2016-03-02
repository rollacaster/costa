import { Image, TouchableHighlight } from 'react-native'

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
        onCategoryChange={handleCategoryChange}/>
    )
  })
  it('should contain an image', () => {
    expect(inputs.find(Image)).to.be.true
  })

  it('should handle a press', () => {
    inputs.find(TouchableHighlight).first().simulate('press')
  })
})
