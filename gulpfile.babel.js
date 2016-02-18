import builder from 'gulp'
import { spawn } from 'child_process'

import { listen, stop } from './src/server/main'

builder.task('test:integration', (done) => {
  listen(() => {
    const integrationTest = spawn('npm', ['run', 'test:integration'], {stdio: 'inherit'})
    integrationTest.on('close', () => {
      stop()
      done()
    })
  })
})

builder.task('develop:hot', (done) => {
  spawn('node_modules/.bin/webpack-dev-server',
        ['--hot', '--inline', '--content-base', 'static', '--port', '4000'],
        {stdio: 'inherit'})
})
