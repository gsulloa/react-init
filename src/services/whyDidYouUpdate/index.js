import React from 'react'

const useWhyDidYouUpdate = () => {
  if (process.env.NODE_ENV !== 'production') {
    const { whyDidYouUpdate } = require('why-did-you-update') // eslint-disable-line global-require
    whyDidYouUpdate(React)
  }
}

export default useWhyDidYouUpdate
