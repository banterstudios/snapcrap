import { constructNavigatorOptions } from 'utils/navigationUtils'

import { StackNavigator } from 'react-navigation'

import Login from 'views/Login'

const Routes = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: constructNavigatorOptions({
      title: 'Login',
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
