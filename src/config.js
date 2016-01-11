let config

const prodConfig = {
  db: 'mongodb://localhost:27017/costa',
  ws: 'ws://localhost:3000',
  port: '3000'
}

const devConfig = {
  db: 'mongodb://localhost:27017/costa-dev',
  ws: 'ws://localhost:3000',
  port: '3000'
}

const testConfig = {
  db: 'mongodb://localhost:27017/costa-test',
  ws: 'ws://localhost:3000',
  port: '3000'
}

switch (process.env.NODE_ENV) {
  case 'production':
    config = prodConfig
    break
  case 'develop':
    config = devConfig
    break
  case 'test':
    config = testConfig
    break
  default:
    config = devConfig
    break
}

export default config
