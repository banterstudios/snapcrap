import React from 'react'

import {
  Text
} from 'react-native'

import styles from './NavLink.styles'

import typogStyles from 'styles/typography.styles'

import commonStyles from 'styles/common.styles'

import PropTypes from 'prop-types'

const NavLink = (props) => {
  const {
    text
  } = props

  return (
    <Text style={[typogStyles.footNote, styles.link, commonStyles.textCenter]}>
      {text}
    </Text>
  )
}

NavLink.propTypes = {
  text: PropTypes.string
}

export default NavLink
