/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import t from 'prop-types'

const Button = ({ children, ...props }) => (
  <button
    type="button"
    css={css`
      color: blue;
      code {
        color: red;
      }
    `}
    {...props}
  >
    {children}
  </button>
)
Button.propTypes = {
  children: t.oneOfType([t.element, t.array, t.string]).isRequired,
}

export default Button
