import React from 'react'
import { render } from 'react-testing-library'
import withRouter from '../config/router'
import App from '../App'

it('renders without crashing', () => {
  const RouterApp = withRouter(App)
  render(<RouterApp />)
})
