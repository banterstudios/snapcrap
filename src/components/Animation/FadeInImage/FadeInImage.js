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
      duration,
      easing
    } = this.props

    Animated.timing(
      this.opacityValue,
      {
        toValue: 1,
        duration,
        easing,
        delay
      }
    ).start()
  }

  render () {
    const {
      width,
      height,
      src,
      style
    } = this.props

    console.log(this.opacityValue)

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
  ]),
  easing: PropTypes.func
}

FadeInImage.defaultProps = {
  delay: 0,
  duration: 400,
  easing: Easing.easeOut
}

export default FadeInImage
