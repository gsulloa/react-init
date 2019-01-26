import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Rematch from './screens/Rematch'
import routes from './config/router/routes'

const screens = [
  { component: Rematch, path: routes.rematch },
  { component: Home, path: routes.home },
]

const App = () => (
  <Switch>
    {screens.map(screen => (
      <Route {...screen} key={screen.path} />
    ))}
    <Route render={() => <div>not found</div>} />
  </Switch>
)

export default App
