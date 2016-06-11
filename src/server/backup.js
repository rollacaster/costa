const { CronJob } = require('cron')
const { spawn } = require('child_process')
const config = require('../config')

module.exports = new CronJob({
  cronTime: '00 00 */1 * * *',
  onTick: () => {
    spawn('mongodump', ['--db', 'costa', `--out=${config.backup}`],
          {stdio: 'inherit'})
  },
  start: false,
  timeZone: 'Europe/Berlin'
})
