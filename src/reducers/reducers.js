import { combineReducers } from 'redux'

import { reducer as form } from 'redux-form'

import auth from './auth'

/**
 * Root reducer - Combines all reducers passed in ready for a redux store
 */
const rootReducer = combineReducers({
  auth,
  form
})

export default rootReducer
