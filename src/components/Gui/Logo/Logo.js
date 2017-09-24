import React from 'react'

import { View } from 'react-native'

import logoStyles from './Logo.styles'

import {
  logo
} from 'assets/images'

import PropTypes from 'prop-types'

import { FadeInImage } from 'components/Animation'

const Logo = (props) => {
  const {
    duration
  } = props

  return (
    <View style={logoStyles.container}>
      <FadeInImage
        width='100%'
        height='100%'
        src={logo}
        duration={duration}
        style={logoStyles.logo} />
    </View>
  )
}

Logo.defaultProps = {
  duration: 400
}

Logo.propTypes = {
  duration: PropTypes.number
}

export default Logo
