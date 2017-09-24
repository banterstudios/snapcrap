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
  awareScrollContainer: {
    height: heightWithHeader
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    height: heightWithHeader,
    width: '100%',
    backgroundColor: backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    height: '100%',
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: 20,
    alignItems: 'center'
  }
})
