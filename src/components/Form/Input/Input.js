import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { TextInput, View, TouchableWithoutFeedback } from 'react-native'

import styles from './Input.styles'

import {
  placeholderPrimary
} from 'styles/colors'

import typoStyles from 'styles/typography'

class Input extends Component {
  constructor (props) {
    super(props)

    this.onPress = this.onPress.bind(this)
    this.setInputRef = this.setInputRef.bind(this)
  }

  onPress () {
    this.inputRef && this.inputRef.focus()
  }

  setInputRef (e) {
    this.inputRef = e
  }

  render () {
    const {
      containerStyle,
      inputStyle,
      onChange,
      value,
      multiline,
      placeholder,
      maxLength,
      keyboardType,
      secureTextEntry,
      numberOfLines,
      returnKeyType
    } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[containerStyle]}>
          <TextInput
            ref={this.setInputRef}
            style={[styles.inputComponent, typoStyles.text, inputStyle]}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onChangeText={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={placeholderPrimary}
            value={value}
            returnKeyType={returnKeyType}
            blurOnSubmit={true}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Input.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ]),
  inputStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ]),
  onChange: PropTypes.func,
  value: PropTypes.any,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  numberOfLines: PropTypes.number,
  returnKeyType: PropTypes.string
}

Input.defaultProps = {
  containerStyle: null,
  inputStyle: null,
  multiline: false,
  keyboardType: 'default',
  secureTextEntry: false,
  numberOfLines: 4,
  returnKeyType: 'done'
}

export default Input
