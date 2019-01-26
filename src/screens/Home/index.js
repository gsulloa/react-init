import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import logo from '../../logo.svg'
import Button from '../../components/button'

const HomeLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const HomeContainer = styled.div`
  text-align: center;
`
const HomeLogo = styled.img`
  animation: ${HomeLogoSpin} infinite 20s linear;
  height: 40vmin;
`
const HomeHeader = styled.header`
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

const Home = () => (
  <HomeContainer>
    <HomeHeader>
      <HomeLogo src={logo} alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/Home.js</code>
        {' '}
and save to reload.
      </p>
      <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </Link>
      <Button
        onClick={() => {
          throw new Error('testing sentry with logrocket')
        }}
      >
        Emotion
        {' '}
        <code>css</code>
        {' '}
example
      </Button>
    </HomeHeader>
  </HomeContainer>
)

export default Home
