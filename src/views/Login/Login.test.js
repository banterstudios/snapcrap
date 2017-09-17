import 'react-native'

import React from 'react'

import Login from './Login'

import renderer from 'react-test-renderer'

describe('Views - Login', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Login />
    )
  })
})
