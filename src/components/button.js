import React from 'react'
import t from 'prop-types'

const Button = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
)
Button.propTypes = {
  children: t.oneOfType([t.element, t.array, t.string]).isRequired,
}

export default Button
