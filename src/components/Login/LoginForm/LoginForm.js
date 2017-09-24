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

import RaisedButton from 'components/Buttons/RaisedButton'

import formStyles from 'styles/form.styles'

import { Scale } from 'components/Animation'

import commonStyles from 'styles/common.styles'

const LoginForm = (props) => {
  return (
    <View>
      <View>
        <Field
          placeholder={EMAIL_PLACEHOLDER}
          keyboardType={'email-address'}
          name='email'
          inputStyle={commonStyles.textCenter}
          component={Input}
          type='email' />
      </View>
      <Scale>
        <LineBreak />
      </Scale>
      <View style={formStyles.formGroupLg}>
        <Field
          secureTextEntry
          placeholder={PASSWORD_PLACEHOLDER}
          name='password'
          component={Input}
          inputStyle={commonStyles.textCenter}
          type='password' />
      </View>
      <View style={formStyles.formGroup}>
        <RaisedButton
          text={'Login'} />
      </View>
    </View>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
