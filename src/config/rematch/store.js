import { init } from '@rematch/core'
import reduxLogger from 'redux-logger'
import createRematchPersist from '@rematch/persist'
import createLoadingPlugin from '@rematch/loading'
import { SHOULD_LOG } from '..'

const createStore = ({ models = {} } = {}) => {
  const middlewares = []
  if (SHOULD_LOG) {
    middlewares.push(reduxLogger)
  }

  const persistPlugin = createRematchPersist({
    throttle: 1000,
    version: 1,
    blacklist: ['loading'],
  })
  const loadingPlugin = createLoadingPlugin()
  const store = init({
    models,
    redux: {
      middlewares,
      rootReducers: {
        RESET: () => undefined,
      },
    },
    plugins: [persistPlugin, loadingPlugin],
  })
  window.store = store
  return store
}

export default createStore
