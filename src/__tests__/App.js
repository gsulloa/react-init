import React from 'react'
import { render } from '../utils/react-testing-library-custom'
import App from '../App'

it('renders without crashing', () => {
  render(<App />)
})

it('renders welcome message', () => {
  const { getByText } = render(<App />)
  expect(getByText('Learn React')).toBeInTheDocument()
})

it('match snapshot', () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchSnapshot()
})
