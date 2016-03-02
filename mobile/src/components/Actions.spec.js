import { Image, TouchableHighlight } from 'react-native'

import Actions from './Actions'

describe('<Actions />', () => {
  let actions
  let handleAction

  beforeEach(() => {
    handleAction = spy()
    actions = shallow(<Actions newCost={false} onAction={handleAction}/>)
  })
  it('should contain an image', () => {
    expect(actions.find(Image)).to.be.true
  })

  it('should handle a press', () => {
    actions.find(TouchableHighlight).first().simulate('press')
    expect(handleAction.calledOnce).to.be.true
  })
})
