import { CronJob } from 'cron'
import { spawn } from 'child_process'
import config from '../config'

export default new CronJob({
  cronTime: '00 00 */1 * * *',
  onTick: () => {
    spawn('mongodump', ['--db', 'costa', `--archive=${config.backup}/CostaBackup.archive`],
          {stdio: 'inherit'})
  },
  start: false,
  timeZone: 'Europe/Berlin'
})
