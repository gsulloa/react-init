import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import logo from './logo.svg'

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppContainer = styled.div`
  text-align: center;
`
const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
`
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Link = styled.a`
  color: #61dafb;
`

const App = () => (
  <AppContainer>
    <AppHeader className="App-header">
      <AppLogo src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
and save to reload.
      </p>
      <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </Link>
    </AppHeader>
  </AppContainer>
)

export default App
