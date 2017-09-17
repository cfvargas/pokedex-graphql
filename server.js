'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const schema = require('./schema')

require('./db/setup')

const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('build'))
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server run port ${PORT}`)
})
