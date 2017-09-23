import React from 'react'

import { View } from 'react-native'

import { FadeInImage } from 'components/Animation'

import logoStyles from './Logo.styles'

import {
  logo
} from 'assets/images'

const Logo = (props) => {
  return (
    <View style={logoStyles.container}>
      <FadeInImage
        width='100%'
        height='100%'
        src={logo}
        style={logoStyles.logo} />
    </View>
  )
}

export default Logo
