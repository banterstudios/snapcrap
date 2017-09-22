import React, { Component } from 'react'

import { View } from 'react-native'

import { LoginForm } from 'components/Login'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './Login.styles'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <LoginForm />
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Login
