import webServer from 'express'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'

const app = webServer()

app.use(favicon('./dashboard/images/favicon.ico'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(webServer.static('./dashboard'))

app.use('*', (req, res) => res.send('Not implemented yet.'))

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

export default app
