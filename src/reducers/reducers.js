import { combineReducers } from 'redux'

import auth from './auth'

/**
 * Root reducer - Combines all reducers passed in ready for a redux store
 */
const rootReducer = combineReducers({
  auth
})

export default rootReducer
