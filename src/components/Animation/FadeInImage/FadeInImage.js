import React from 'react'

import PropTypes from 'prop-types'

import FadeIn from '../common/FadeIn'

import { Animated } from 'react-native'

const FadeInImage = (props) => {
  const {
    width,
    height,
    src,
    style,
    value
  } = props

  return (
    <Animated.Image
      style={[{ width, height, opacity: value }, style]}
      source={src} />
  )
}

FadeInImage.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  src: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default FadeIn(FadeInImage)
