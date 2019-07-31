import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { withClientState } from 'apollo-link-state'

const AUTH_TOKEN = 'token'

const cache = new InMemoryCache()

const requestsHandler = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_URI || 'https://graphql-pokemon.now.sh/',
})

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
  }
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const localStateHandler = withClientState({
  defaults: {
    isConnected: true,
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache: currentCache }) => {
        currentCache.writeData({ data: { isConnected } })
        return null
      },
    },
  },
  cache,
})

const authHandler = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })
  return forward(operation)
})

const link = ApolloLink.from([errorHandler, localStateHandler, authHandler, requestsHandler])

const client = new ApolloClient({
  link,
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

export default client
