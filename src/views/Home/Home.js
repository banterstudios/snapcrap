import React, { Component } from 'react'

import { View, Text } from 'react-native'

import styles from './Home.styles'

import Camera from 'react-native-camera'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isBack: true
    }

    // Vars
    this.cameraRef = null

    // Fns
    this.setCameraRef = this.setCameraRef.bind(this)
  }

  setCameraRef (ref) {
    this.cameraRef = ref
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera
          type={Camera.constants.Type.front}
          ref={this.setCameraRef}
          style={styles.preview}>
          <Text style={styles.capture}>
            [CAPTURE]
          </Text>
        </Camera>
      </View>
    )
  }
}

export default Home
