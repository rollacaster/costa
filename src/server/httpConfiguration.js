import webServer from 'express'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'

const httpConfiguration = webServer()

httpConfiguration.use(favicon('static/images/favicon.ico'))
httpConfiguration.use(bodyParser.json())
httpConfiguration.use(bodyParser.urlencoded({ extended: false }))
httpConfiguration.use('/', webServer.static('static'))

httpConfiguration.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

export default httpConfiguration
