import React, { Component } from 'react'

import { View } from 'react-native'

import { LoginForm } from 'components/Login'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './Login.styles'

import { ShiftUp } from 'components/Animation'

import Logo from 'components/Gui/Logo'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Logo />
            <ShiftUp>
              <LoginForm />
            </ShiftUp>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default Login
