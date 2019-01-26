import React from 'react'
import { I18nextProvider } from 'react-i18next'
import instance from './instance'

const HOC = WrappedComponent => props => (
  <I18nextProvider i18n={instance}>
    <WrappedComponent {...props} />
  </I18nextProvider>
)

export default HOC
