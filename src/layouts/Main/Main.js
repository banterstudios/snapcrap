import React from 'react'

import { StatusBar, View } from 'react-native'

import {
  backgroundPrimary
} from 'styles/colors.styles'

import styles from './Main.styles'

const MainLayout = (props) => {
  const {
    children
  } = props

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={backgroundPrimary}
        barStyle='light-content'
      />
      {children}
    </View>
  )
}

export default MainLayout
