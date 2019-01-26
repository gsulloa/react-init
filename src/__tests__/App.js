import React from 'react'
import { render } from 'react-testing-library'
import withRouter from '../config/router'
import App from '../App'

it('renders without crashing', () => {
  const RouterApp = withRouter(App)
  render(<RouterApp />)
})

it('renders welcome message', () => {
  const RouterApp = withRouter(App)
  const { getByText } = render(<RouterApp />)
  expect(getByText('Learn React')).toBeInTheDocument()
})

it('match snapshot', () => {
  const RouterApp = withRouter(App)
  const { container } = render(<RouterApp />)
  expect(container.firstChild).toMatchSnapshot()
})
