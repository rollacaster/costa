import { createRenderer } from 'react-addons-test-utils'
import chai, { expect } from 'chai'
import chaiJSX from 'jsx-chai'

chai.use(chaiJSX)

export default {
  createRenderer,
  expect
}
