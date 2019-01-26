import { init } from '@rematch/core'

const createStore = ({ models = {} } = {}) => {
  const store = init({
    models,
  })
  return store
}

export default createStore
