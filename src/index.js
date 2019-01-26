import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import withEmotionProvider from './config/emotion'
import withI18nProvider from './config/i18n'
import withRouter from './config/router'
import withStore from './config/rematch'

import * as serviceWorker from './serviceWorker'

import pipe from './utils/pipe'

import useLogRocket from './services/logrocket'
import useSentry from './services/sentry'
import useWhyDidYouUpdate from './services/whyDidYouUpdate'

const services = [useLogRocket, useSentry, useWhyDidYouUpdate]
services.forEach(service => service())

const providers = [withEmotionProvider, withI18nProvider, withRouter, withStore].reverse()

const RootApp = pipe(...providers)(App)
ReactDOM.render(<RootApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
