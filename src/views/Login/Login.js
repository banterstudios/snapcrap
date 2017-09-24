import React, { Component } from 'react'

import { View } from 'react-native'

import { LoginForm } from 'components/Login'

import styles from './Login.styles'

import formStyles from 'styles/form.styles'

import Logo from 'components/Gui/Logo'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import NavLink from 'components/Navigation/NavLink'

// import { NavigationActions } from 'react-navigation'

import {
  ShiftUp,
  FadeInView
} from 'components/Animation'

const ANIM_DURATION = 400
const KEYBOARD_EXTRA_HEIGHT = 120

class Login extends Component {
  constructor (props) {
    super(props)

    this.navigateFromLogin = this.navigateFromLogin.bind(this)
  }

  navigateFromLogin () {
    this.props.navigation.navigate('Home')
    /*
    const {
      navigation
    } = this.props

    const routeName = 'Home'

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })

    navigation.dispatch(resetAction)
    */
  }

  render () {
    return (
      <View style={styles.awareScrollContainer}>
        <KeyboardAwareScrollView enableOnAndroid extraHeight={KEYBOARD_EXTRA_HEIGHT}>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <View style={[formStyles.formGroup, styles.logo]}>
                <Logo
                  duration={ANIM_DURATION} />
              </View>
              <ShiftUp duration={ANIM_DURATION}>
                <View style={formStyles.formGroup}>
                  <LoginForm
                    onSubmit={this.navigateFromLogin} />
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
