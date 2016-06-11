const builder = require('gulp')
const { spawn } = require('child_process')

const { listen, stop } = require('./src/server/main')

builder.task('test:integration', (done) => {
  listen(() => {
    const integrationTest = spawn('npm', ['run', 'test:integration'], {stdio: 'inherit'})
    integrationTest.on('close', () => {
      stop()
      done()
    })
  })
})

