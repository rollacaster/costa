import testUtils from 'react-addons-test-utils'
import chai from 'chai'
import chaiJSX from 'jsx-chai'

chai.use(chaiJSX)

export const expect = chai.expect
export const createRenderer = testUtils.createRenderer

