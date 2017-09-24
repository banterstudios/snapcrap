import React, { Component } from 'react'

import { View, Text } from 'react-native'

import { LoginForm } from 'components/Login'

import styles from './Login.styles'

import formStyles from 'styles/form.styles'

import { ShiftUp } from 'components/Animation'

import Logo from 'components/Gui/Logo'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import NavLink from 'components/Navigation/NavLink'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.awareScrollContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <View style={[formStyles.formGroup, styles.logo]}>
                <Logo />
              </View>
              <ShiftUp>
                <View style={formStyles.formGroup}>
                  <LoginForm />
                </View>
              </ShiftUp>
              <View>
                <NavLink text='Sign in' />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Login
