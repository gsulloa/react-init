import React from 'react'
import t from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import instance from './instance'

const Provider = ({ children }) => <I18nextProvider i18n={instance}>{children}</I18nextProvider>
Provider.propTypes = {
  children: t.element.isRequired,
}

export default Provider
