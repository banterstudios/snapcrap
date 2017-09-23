import React, { Component } from 'react'

import { Animated, Easing } from 'react-native'

import PropTypes from 'prop-types'

class FadeInImage extends Component {
  constructor (props) {
    super(props)

    this.opacityValue = new Animated.Value(0)

    this.fadeIn = this.fadeIn.bind(this)
  }

  componentDidMount () {
    this.fadeIn()
  }

  fadeIn () {
    const {
      delay,
      duration
    } = this.props

    this.opacityValue.setValue(0)

    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration,
        easing: Easing.easeOut,
        delay
      }
    )
  }

  render () {
    const {
      width,
      height,
      src,
      style
    } = this.props

    return (
      <Animated.Image
        style={[{ width, height, opacity: this.opacityValue }, style]}
        source={src} />
    )
  }
}

FadeInImage.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
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

FadeInImage.defaultProps = {
  delay: 0,
  duration: 400
}

export default FadeInImage
