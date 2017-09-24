import React, { Component } from 'react'

import { View } from 'react-native'

import { LoginForm } from 'components/Login'

import styles from './Login.styles'

import formStyles from 'styles/form.styles'

import * as Animatable from 'react-native-animatable'

import Logo from 'components/Gui/Logo'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import NavLink from 'components/Navigation/NavLink'

const ANIM_DURATION = 800
const ANIM_EASING = 'ease-out'

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
              <Animatable.View
                animation='bounceInUp'
                easing={ANIM_EASING}
                duration={ANIM_DURATION}
              >
                <View style={formStyles.formGroup}>
                  <LoginForm />
                </View>
              </Animatable.View>
              <Animatable.View
                animation='fadeIn'
                easing={ANIM_EASING}
                duration={ANIM_DURATION}
              >
                <NavLink text='Sign in' />
              </Animatable.View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Login
