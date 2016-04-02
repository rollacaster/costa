import { CronJob } from 'cron'
import { spawn } from 'child_process'
import config from '../config'

export default new CronJob({
  cronTime: '00 00 */1 * * *',
  onTick: () => {
    spawn('mongodump', ['--db', 'costa', `--out=${config.backup}`],
          {stdio: 'inherit'})
  },
  start: false,
  timeZone: 'Europe/Berlin'
})
