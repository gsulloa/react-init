import React from 'react'
import { ThemeProvider } from 'emotion-theming'

const theme = {}

const withEmotionProvider = WrappedComponent => props => (
  <ThemeProvider theme={theme}>
    <WrappedComponent {...props} />
  </ThemeProvider>
)
export default withEmotionProvider
