import {
  StyleSheet
} from 'react-native'

import {
  backgroundPrimary
} from 'styles/colors'

import {
  heightWithHeader
} from 'styles/ui'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    height: heightWithHeader,
    width: '100%',
    backgroundColor: backgroundPrimary
  }
})
