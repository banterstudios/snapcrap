import React, { Component } from 'react'

import { Animated, Easing } from 'react-native'

import PropTypes from 'prop-types'

import { omit } from 'utils/objectUtils'

const FadeInHoc = (WrapperComponent) => {
  class FadeIn extends Component {
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
      const props = omit(this.props, ['delay', 'duration', 'easing'])

      return (
        <WrapperComponent
          value={this.opacityValue}
          {...props} />
      )
    }
  }

  FadeIn.propTypes = {
    delay: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.func
  }

  FadeIn.defaultProps = {
    delay: 0,
    duration: 400,
    easing: Easing.easeOut
  }

  return FadeIn
}

export default FadeInHoc
