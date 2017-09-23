import React, { Component } from 'react'

import { Animated } from 'react-native'

class ShiftUp extends Component {
  constructor (props) {
    super(props)

    this.springValue = new Animated.Value(40)

    this.spring = this.spring.bind(this)
  }

  componentDidMount () {
    this.spring()
  }

  spring () {
    this.springValue.setValue(40)
    Animated.spring(
      this.springValue,
      {
        toValue: 0,
        friction: 2,
        tension: 1
      }
    ).start()
  }

  render () {
    const {
      children
    } = this.props

    return (
      <Animated.View
        style={{ top: this.springValue }}>
        {children}
      </Animated.View>
    )
  }
}

export default ShiftUp
