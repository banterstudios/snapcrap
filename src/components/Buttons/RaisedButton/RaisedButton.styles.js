import {StyleSheet} from 'react-native'

import {
  buttonPrimary,
  textPrimary,
  buttonDisabled
} from 'styles/colors.styles'

export default StyleSheet.create({
  container: {
    backgroundColor: buttonPrimary,
    alignItems: 'center',
    borderRadius: 50,
    minHeight: 30,
    padding: 10,
    justifyContent: 'center'
  },
  text: {
    color: textPrimary
  },
  disabled: {
    backgroundColor: buttonDisabled
  }
})