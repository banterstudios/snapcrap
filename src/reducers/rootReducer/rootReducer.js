import { combineReducers } from 'redux'

const fakeReducer = (state = {}) => { return state }

/**
 * Root reducer - Combines all reducers passed in ready for a redux store
 */
const rootReducer = combineReducers({ fakeReducer })

export default rootReducer
