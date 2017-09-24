import React from 'react'

import { View } from 'react-native'

import logoStyles from './Logo.styles'

import {
  logo
} from 'assets/images'

import * as Animatable from 'react-native-animatable'

import PropTypes from 'prop-types'

const Logo = (props) => {
  const {
    duration
  } = props

  return (
    <View style={logoStyles.container}>
      <Animatable.Image
        animation='fadeIn'
        duration={duration}
        easing='ease-out'
        source={logo}
        style={[{ width: '100%', height: '100%' }, logoStyles.logo]} />
    </View>
  )
}

Logo.propTypes = {
  duration: PropTypes.number
}

export default Logo
