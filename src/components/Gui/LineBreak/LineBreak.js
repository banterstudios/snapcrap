import React from 'react'

import { View } from 'react-native'

import styles from './LineBreak.styles'

import PropTypes from 'prop-types'

const LineBreak = (props) => {
  const {
    style,
    containerStyle
  } = props

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.linebreak, style]} />
    </View>
  )
}

LineBreak.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ]),
  containerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ])
}

export default LineBreak
