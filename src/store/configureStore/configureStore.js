import {
  createStore,
  applyMiddleware
} from 'redux'

import thunkMiddleware from 'redux-thunk'

import rootReducer from 'reducers'

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
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}

export default configureStore
