import React from 'react'

import { View } from 'react-native'

import styles from './LineBreak.styles'

import PropTypes from 'prop-types'

const LineBreak = (props) => {
  const {
    style
  } = props

  return (
    <View style={[styles.linebreak, style]} />
  )
}

LineBreak.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ])
}

export default LineBreak
