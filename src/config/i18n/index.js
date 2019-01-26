import React from 'react'
import { I18nextProvider } from 'react-i18next'
import instance from './instance'

const withI18nProvider = WrappedComponent => props => (
  <I18nextProvider i18n={instance}>
    <WrappedComponent {...props} />
  </I18nextProvider>
)

export default withI18nProvider
