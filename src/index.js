'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Pokedex from '@/components/Pokedex'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'


const App = () => {
  return (
    <div>
      <h1> Hello Pokedex </h1>
      <Link to='/'> Home </Link> <br />
      <Link to='/pokedex'> Pokedex </Link>
      <Route exact path='/' render={() => {
        return <h1> Home </h1>
      }} />
      <Route path='/pokedex' component={Pokedex} />
    </div>
  )
}

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'htpp://localhost:3000/graphql' })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
