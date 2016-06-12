const testUtils = require('react-addons-test-utils')
const chai = require('chai')
const chaiJSX = require('jsx-chai')
const sinon = require('sinon')

chai.use(chaiJSX.default)

exports.expect = chai.expect
exports.createRenderer = testUtils.createRenderer
exports.spy = sinon.spy

