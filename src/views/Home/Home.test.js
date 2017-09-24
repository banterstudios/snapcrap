import 'react-native'

import React from 'react'

import Home from './Home'

import renderer from 'react-test-renderer'

describe('Views - Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Home />
    )
  })
})
