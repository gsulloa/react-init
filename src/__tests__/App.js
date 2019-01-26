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

it('match snapshot at home', () => {
  const { container } = render(<App />)
  expect(container.firstChild).toMatchSnapshot()
})

it('renders welcome message', () => {
  const { getByText } = render(<App />, { initialEntries: ['/not/found/route'] })
  expect(getByText('not found')).toBeInTheDocument()
})

it('match snapshot at not found', () => {
  const { container } = render(<App />, { initialEntries: ['/custom/route'] })
  expect(container.firstChild).toMatchSnapshot()
})
