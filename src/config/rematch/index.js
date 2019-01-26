import { Provider as RematchProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { getPersistor } from '@rematch/persist'
import withProvider from '../withProvider'
import * as models from './models'
import createStore from './store'

const store = createStore({ models })
const persistor = getPersistor()

const withStore = withProvider(RematchProvider, { store })
export const withPersistor = withProvider(PersistGate, { persistor })

export const cleanStore = async () => {
  await persistor.purge()
  persistor.persist()
  persistor.flush()
}

export default withStore
