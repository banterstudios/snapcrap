import { StackNavigator } from 'react-navigation'

import React from 'react'

import { View } from 'react-native'

const Test = () => {
  return (
    <View>
    </View>
  )
}

const Router = StackNavigator({
  Login: {
    screen: Test,
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

export default Router
