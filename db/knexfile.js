'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'piipe vargas',
      database: 'graphql-pokedex'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.PORT,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DB_DATABASE
    }
  }
}
