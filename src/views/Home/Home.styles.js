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
  container: {
    height: heightWithHeader,
    backgroundColor: backgroundPrimary
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})
