import {
  createStore,
  applyMiddleware
} from 'redux'

import thunkMiddleware from 'redux-thunk'

import reducers from 'reducers'

import immutableStateInvariant from 'redux-immutable-state-invariant'

import isDev from 'isdev'

let middleware

if (isDev) {
  middleware = [
    thunkMiddleware,
    immutableStateInvariant
  ]
} else {
  middleware = [
    thunkMiddleware
  ]
}

const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  )
}

export default configureStore
