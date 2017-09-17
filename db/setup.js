'use stritc'

const { Model } = require('objection')
const knexConfig = require('./knexfile')
const Knex = require('knex')

const knex = Knex(
  (process.env === 'production')
  ? knexConfig.production
  : knexConfig.development
)

Model.knex(knex)
