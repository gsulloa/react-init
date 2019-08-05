import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'screens/Home'
import routes from 'config/router/routes'

const App = () => (
  <Switch>
    <Route component={Home} exact path={routes.home} />
    <Route render={() => <div>not found</div>} />
  </Switch>
)
App.whyDidYouRender = true
export default App
