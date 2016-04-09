import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { jsdom } from 'jsdom'
import { spy } from 'sinon'
import config from '../config'
import ws, { Server } from 'ws'

// Test utils
global.expect = expect
global.spy = spy
global.shallow = shallow
global.mount = mount
global.React = React

// Open ws server
export const wsServer = new Server({port: config.port})
export let wsConnection
wsServer.on('connection', (ws) => { wsConnection = ws })

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