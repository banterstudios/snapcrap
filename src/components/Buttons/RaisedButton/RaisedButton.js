import React from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import PropTypes from 'prop-types'

import buttonStyles from './RaisedButton.styles'

import typographyStyles from 'styles/typography.styles'

const RaisedButton = (props) => {
  const {
    onPress,
    children,
    disabled,
    text
  } = props

  return (
    <TouchableOpacity
      style={[buttonStyles.container, disabled && buttonStyles.disabled]}
      onPress={onPress}>
      <View>
        {
          text
            ? (
              <Text style={[typographyStyles.h6, buttonStyles.text]}>
                {text}
              </Text>
            )
            : null
        }
        {children}
      </View>
    </TouchableOpacity>
  )
}

RaisedButton.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string
}

RaisedButton.defaultProps = {
  disabled: false,
  text: ''
}

export default RaisedButton
