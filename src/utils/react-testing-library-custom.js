import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import withProvider from '../config/withProvider'
import pipe from './pipe'

const withMemoryRouter = initialEntries => withProvider(MemoryRouter, { initialEntries })

function render(ui, { initialEntries } = {}, ...rest) {
  const ComponentUi = () => ui
  const WithProviders = pipe(withMemoryRouter(initialEntries))(ComponentUi)
  return rtlRender(<WithProviders />, ...rest)
}

export * from '@testing-library/react'
export { render }
