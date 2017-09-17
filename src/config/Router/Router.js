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
    screen: Test
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
