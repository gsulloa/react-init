import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import EmotionProvider from './config/emotion'

import * as serviceWorker from './serviceWorker'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update') // eslint-disable-line global-require
  whyDidYouUpdate(React)
}

const providers = [EmotionProvider]

const RootApp = () => [...providers, App].reduce((Comp1, Comp2) => (
  <Comp1>
    <Comp2 />
  </Comp1>
))

ReactDOM.render(<RootApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
