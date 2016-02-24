let config

const devConfig = {
  ws: {
    url: 'ws://localhost',
    port: 3000
  }
}

const testConfig = {
  ws: {
    url: 'ws://localhost',
    port: 3000
  }
}

switch (process.env.NODE_ENV) {
  case 'development':
    config = devConfig
    break
  case 'test':
    config = testConfig
    break
}

export default config
