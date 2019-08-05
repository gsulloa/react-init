import React from 'react'

const useWhyDidYouUpdate = () => {
  if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render') // eslint-disable-line global-require
    whyDidYouRender(React)
  }
}

export default useWhyDidYouUpdate
