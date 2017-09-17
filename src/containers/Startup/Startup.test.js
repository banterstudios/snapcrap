import 'react-native'

import React from 'react'

import StartupContainer, { Startup } from './Startup'

import renderer from 'react-test-renderer'

import { Provider } from 'react-redux'

import configureMockStore from 'redux-mock-store'

import thunk from 'redux-thunk'

const initialState = {
  isReady: false,
  auth: {
    isReady: false
  }
}

describe('containers - StartupContainer', () => {
  const mockStore = configureMockStore([thunk])
  const store = mockStore(initialState)

  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <StartupContainer />
      </Provider>
    )
  })
})

describe('containers - StartupComponent', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Startup {...initialState} />
    )
  })
})
