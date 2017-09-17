import React from 'react'

import { StackNavigator } from 'react-navigation'

import Startup from 'containers/Startup'

import Login from 'views/Login'

const Routes = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  }
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    style: {
      display: 'none'
    }
  }
})

const Router = (
  <Startup>
    <Routes />
  </Startup>
)

export default Router
