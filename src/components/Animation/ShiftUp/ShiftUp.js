import React, { Component } from 'react'

import { Animated, Easing } from 'react-native'

import PropTypes from 'prop-types'

class ShiftUp extends Component {
  constructor (props) {
    super(props)

    this.shiftValue = new Animated.Value(80)
    this.opacityValue = new Animated.Value(0)

    this.shift = this.shift.bind(this)
    this.calculateTiming = this.calculateTiming.bind(this)
  }

  componentDidMount () {
    this.shift()
  }

  calculateTiming (value, toValue, duration, easing, delay) {
    return Animated.timing(value, { toValue, duration, easing, delay })
  }

  shift () {
    const {
      delay,
      duration,
      easing
    } = this.props

    Animated.sequence([
      Animated.parallel([
        this.calculateTiming(this.shiftValue, 0, duration, easing, delay),
        this.calculateTiming(this.opacityValue, 1, duration, easing, delay)
      ])
    ]).start()
  }

  render () {
    const {
      children
    } = this.props

    return (
      <Animated.View
        style={{ top: this.shiftValue, opacity: this.opacityValue }}>
        {children}
      </Animated.View>
    )
  }
}

ShiftUp.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.func
}

ShiftUp.defaultProps = {
  delay: 0,
  duration: 400,
  easing: Easing.easeOut
}

export default ShiftUp
