import React from 'react'

const withProvider = (Provider, providerProps) => WrappedComponent => props => (
  <Provider {...providerProps}>
    <WrappedComponent {...props} />
  </Provider>
)

export default withProvider
