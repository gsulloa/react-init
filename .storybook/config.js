import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import withEmotionProvider from '../src/config/emotion'
import withI18nProvider from '../src/config/i18n'
import withRouter from '../src/config/router'
import pipe from '../src/utils/pipe'

addDecorator(checkA11y)
addDecorator(story => {
  const providers = [withEmotionProvider, withI18nProvider, withRouter].reverse()
  const WithProviders = pipe(...providers)(story)
  return <WithProviders />
})
function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
