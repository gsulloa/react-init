import React from 'react'
import t from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

const theme = {}

const Provider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
Provider.propTypes = {
  children: t.element.isRequired,
}

export default Provider
