import React from 'react'
import { render as rtlRender } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import withProvider from '../config/withProvider'
import pipe from './pipe'

const withMemoryRouter = initialEntries => withProvider(MemoryRouter, { initialEntries })

function render(ui, { initialEntries } = {}, ...rest) {
  const ComponentUi = () => ui
  const WithProviders = pipe(withMemoryRouter(initialEntries))(ComponentUi)
  return rtlRender(<WithProviders />, ...rest)
}

export * from 'react-testing-library'
export { render }
