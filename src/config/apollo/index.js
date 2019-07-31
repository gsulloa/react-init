import { ApolloProvider } from 'react-apollo'
import client from './client'
import withProvider from '../withProvider'

const withApolloProvider = withProvider(ApolloProvider, { client })

export default withApolloProvider
