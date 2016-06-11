const React = require('react')
const { expect } = require('chai')
const { shallow, mount } = require('enzyme')
const { jsdom } = require('jsdom')
const { spy } = require('sinon')
const config = require('../config')
const ws = require('ws')
const { Server } = ws

// Test utils
global.expect = expect
global.spy = spy
global.shallow = shallow
global.mount = mount
global.React = React

// Open ws server
const wsServer = new Server({port: config.port})
let wsConnection
wsServer.on('connection', (ws) => { wsConnection = ws })
exports.wsServer = wsServer
exports.wsConnection = wsConnection

// Create browser environment
const exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
global.navigator = {
  userAgent: 'node.js',
  geolocation: {
    getCurrentPosition: () => ({latitude: 0, longitude: 0})
  }
}
global.WebSocket = ws

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.documentRef = document
