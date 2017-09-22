import {
  StyleSheet
} from 'react-native'

import {
  backgroundPrimary
} from 'styles/colors.styles'

import {
  heightWithHeader
} from 'styles/ui.styles'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    height: heightWithHeader,
    width: '100%',
    backgroundColor: backgroundPrimary
  }
})
