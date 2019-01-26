import { init } from '@rematch/core'
import reduxLogger from 'redux-logger'
import createRematchPersist from '@rematch/persist'
import { SHOULD_LOG } from '..'

const createStore = ({ models = {} } = {}) => {
  const middlewares = []
  if (SHOULD_LOG) {
    middlewares.push(reduxLogger)
  }

  const persistPlugin = createRematchPersist({
    throttle: 1000,
    version: 1,
  })
  const store = init({
    models,
    redux: {
      middlewares,
    },
    plugins: [persistPlugin],
  })
  return store
}

export default createStore
