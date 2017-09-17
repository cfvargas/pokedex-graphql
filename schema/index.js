'use strict'

const { makeExecutableSchema } = require('graphql-tools')

const rootQuery = `
  type Curso {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    cursos: [Curso]
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuery]
})

module.exports = schema
