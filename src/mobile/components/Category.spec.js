import { TouchableHighlight } from 'react-native'

import Category from './Category'

describe('<Category />', () => {
  let category
  let handlePress

  beforeEach(() => {
    handlePress = spy()
    category = shallow(
      <Category
        name={'test'}
        selected={'adsf'}
        onPress={handlePress} />
    )
  })

  it('should render a name', () => {
    expect(category.contains('test')).to.be.true
  })

  it('should have differnt colors on selection', () => {
    const selectedCategory = shallow(
      <Category
        name={'test'}
        selected={'test'}
        onPress={handlePress} />
    )

    const selectedColor = selectedCategory.find(TouchableHighlight)
            .first().props()
            .style[1].backgroundColor
    const nonSelectedColor = category.find(TouchableHighlight)
            .first().props()
            .style[1].backgroundColor

    expect(selectedColor).not.to.be.equal(nonSelectedColor)
  })

  it('should handle a press', () => {
    category.find(TouchableHighlight).first().simulate('press')
    expect(handlePress.calledOnce).to.be.true
  })
})
