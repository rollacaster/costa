let config

const prodConfig = {
  ws: {
    url: 'ws://192.168.0.234',
    port: 3000
  }
}

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
  case 'production':
    config = prodConfig
    break
  case 'development':
    config = devConfig
    break
  case 'test':
    config = testConfig
    break
}

export default config
