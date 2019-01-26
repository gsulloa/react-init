import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import withEmotionProvider from './config/emotion'
import withI18nProvider from './config/i18n'

import * as serviceWorker from './serviceWorker'

import pipe from './utils/pipe'

import './services/logrocket'
import './services/sentry'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update') // eslint-disable-line global-require
  whyDidYouUpdate(React)
}

const providers = [withEmotionProvider, withI18nProvider]

const RootApp = pipe(...providers)(App)
ReactDOM.render(<RootApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
