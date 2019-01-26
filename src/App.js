import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home'

const App = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route render={() => <div>not found</div>} />
  </Switch>
)

export default App
