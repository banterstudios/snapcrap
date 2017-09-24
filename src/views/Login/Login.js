import React, { Component } from 'react'

import { View } from 'react-native'

import { LoginForm } from 'components/Login'

import styles from './Login.styles'

import formStyles from 'styles/form.styles'

import Logo from 'components/Gui/Logo'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import NavLink from 'components/Navigation/NavLink'

import {
  ShiftUp,
  FadeInView
} from 'components/Animation'

const ANIM_DURATION = 400

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
                <Logo
                  duration={ANIM_DURATION} />
              </View>
              <ShiftUp duration={ANIM_DURATION}>
                <View style={formStyles.formGroup}>
                  <LoginForm />
                </View>
              </ShiftUp>
              <FadeInView
                duration={ANIM_DURATION}>
                <NavLink text='Sign Up' />
              </FadeInView>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Login
