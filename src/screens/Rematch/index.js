import React from 'react'
import t from 'prop-types'
import { connect } from 'react-redux'

const Count = ({ count, increment, incrementAsync }) => (
  <div>
    The count is
    {' '}
    {count}
    <button type="button" onClick={increment}>
      increment
    </button>
    <button type="button" onClick={incrementAsync}>
      incrementAsync
    </button>
  </div>
)
Count.propTypes = {
  count: t.number.isRequired,
  increment: t.func.isRequired,
  incrementAsync: t.func.isRequired,
}

const mapState = state => ({
  count: state.count,
})

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1),
})

const CountContainer = connect(
  mapState,
  mapDispatch,
)(Count)

export default CountContainer
