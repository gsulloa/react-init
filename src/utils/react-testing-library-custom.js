import React from 'react'
import { render as rtlRender } from 'react-testing-library'
import withRouter from '../config/router'
import pipe from './pipe'

function render(ui, ...rest) {
  const ComponentUi = () => ui
  const WithProviders = pipe(withRouter)(ComponentUi)
  return rtlRender(<WithProviders />, ...rest)
}

export * from 'react-testing-library'
export { render }
