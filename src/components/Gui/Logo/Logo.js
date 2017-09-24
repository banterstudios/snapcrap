import React from 'react'

import { View } from 'react-native'

import logoStyles from './Logo.styles'

import {
  logo
} from 'assets/images'

import * as Animatable from 'react-native-animatable'

const Logo = (props) => {
  return (
    <View style={logoStyles.container}>
      <Animatable.Image
        animation='fadeIn'
        duration={400}
        easing='ease-out'
        source={logo}
        style={[{ width: '100%', height: '100%' }, logoStyles.logo]} />
    </View>
  )
}

export default Logo
