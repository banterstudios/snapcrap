import React from 'react'

import FadeIn from '../common/FadeIn'

import { Animated } from 'react-native'

const FadeInView = (props) => {
  const {
    style,
    value,
    children
  } = props

  return (
    <Animated.View
      style={[{ opacity: value }, style]}>
      {children}
    </Animated.View>
  )
}

export default FadeIn(FadeInView)
