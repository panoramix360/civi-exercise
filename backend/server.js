const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./lib/handlers')

const app = express()

const port = process.env.PORT || 3000

app.disable('x-powered-by')

app.use(bodyParser.json())

app.get('/messages', handlers.messages)

app.use(handlers.notFound)
app.use(handlers.serverError)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}; press Ctrl-C to terminate.`)
  })
} else {
  module.exports = app
}