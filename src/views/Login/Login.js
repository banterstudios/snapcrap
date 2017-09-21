import React, { Component } from 'react'

import { View, Text } from 'react-native'

import styles from './Login.styles'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text>
          Login!
        </Text>
      </View>
    )
  }
}

export default Login
