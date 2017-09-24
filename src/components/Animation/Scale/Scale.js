import React, { Component } from 'react'

import { Animated } from 'react-native'

class Scale extends Component {
  constructor (props) {
    super(props)

    this.scaleValue = new Animated.Value(0)

    this.scale = this.scale.bind(this)
    this.calculateSpring = this.calculateSpring.bind(this)
  }

  componentDidMount () {
    this.scale()
  }

  calculateSpring (value, toValue, friction) {
    return Animated.spring(value, { toValue, friction })
  }

  scale () {
    this.calculateSpring(this.scaleValue, 1, 4).start()
  }

  render () {
    const {
      children
    } = this.props

    return (
      <Animated.View
        style={{ transform: [{ scale: this.scaleValue }] }}>
        {children}
      </Animated.View>
    )
  }
}

export default Scale
