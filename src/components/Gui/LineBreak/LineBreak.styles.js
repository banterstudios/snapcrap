import {
  StyleSheet
} from 'react-native'

import {
  linebreakPrimary
} from 'styles/colors.styles'

// Local vars
const margin = 10

export default StyleSheet.create({
  linebreak: {
    height: 2,
    width: '100%',
    backgroundColor: linebreakPrimary,
    marginTop: margin,
    marginBottom: margin
  }
})
