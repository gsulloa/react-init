import React from 'react'
import t from 'prop-types'
import { connect } from 'react-redux'
import { cleanStore } from '../../config/rematch'

const Count = ({
  count, increment, incrementAsync, loading, allLoadingObject, reset,
}) => (
  <div>
    The count is
    {' '}
    {count}
    <button type="button" onClick={increment} disabled={loading}>
      increment
    </button>
    <button type="button" onClick={incrementAsync} disabled={loading}>
      incrementAsync
    </button>
    <button
      type="button"
      onClick={() => {
        reset()
        cleanStore()
      }}
      disabled={loading}
    >
      reset
    </button>
    <div>{JSON.stringify(allLoadingObject, null, 2)}</div>
  </div>
)
Count.propTypes = {
  count: t.number.isRequired,
  loading: t.bool.isRequired,
  increment: t.func.isRequired,
  incrementAsync: t.func.isRequired,
  reset: t.func.isRequired,
  allLoadingObject: t.shape({
    globals: t.bool.isRequired,
  }).isRequired,
}

const mapState = state => ({
  count: state.count,
  loading: state.loading.models.count,
  allLoadingObject: state.loading,
})

const mapDispatch = dispatch => {
  const {
    count: { increment, incrementAsync },
  } = dispatch
  return {
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1),
    reset: () => dispatch({ type: 'RESET' }),
  }
}

const CountContainer = connect(
  mapState,
  mapDispatch,
)(Count)

export default CountContainer
