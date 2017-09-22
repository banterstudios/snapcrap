import React from 'react'

import {
  Field,
  reduxForm
} from 'redux-form'

import { View } from 'react-native'

import { Input } from 'components/Form'

import LineBreak from 'components/Gui/LineBreak'

import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER
} from 'data/form/placeholders'

const LoginForm = (props) => {
  return (
    <View>
      <View>
        <Field
          placeholder={EMAIL_PLACEHOLDER}
          keyboardType={'email-address'}
          name='email'
          component={Input}
          type='email' />
      </View>
      <LineBreak />
      <View>
        <Field
          secureTextEntry
          placeholder={PASSWORD_PLACEHOLDER}
          name='password'
          component={Input}
          type='password' />
      </View>
    </View>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
