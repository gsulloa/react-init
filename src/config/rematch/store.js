import { init } from '@rematch/core'
import reduxLogger from 'redux-logger'
import { SHOULD_LOG } from '..'

const createStore = ({ models = {} } = {}) => {
  const middlewares = []
  if (SHOULD_LOG) {
    middlewares.push(reduxLogger)
  }
  const store = init({
    models,
    redux: {
      middlewares,
    },
  })
  return store
}

export default createStore
