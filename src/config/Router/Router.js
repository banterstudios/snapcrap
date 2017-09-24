import { constructNavigatorOptions } from 'utils/navigationUtils'

import { StackNavigator } from 'react-navigation'

import Login from 'views/Login'

import Home from 'views/Home'

const Routes = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: constructNavigatorOptions({
      header: null
    })
  },
  Home: {
    screen: Home,
    navigationOptions: constructNavigatorOptions({
      header: null
    })
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

export default Routes
