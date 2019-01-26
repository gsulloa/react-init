import { Provider as RematchProvider } from 'react-redux'
import withProvider from '../withProvider'
import * as models from './models'
import createStore from './store'

const store = createStore({ models })

const withStore = withProvider(RematchProvider, { store })

export default withStore
