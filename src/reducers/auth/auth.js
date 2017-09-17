import update from 'immutability-helper'

import {
  LOG_OUT,
  STORE_USER_CREDENTIALS,
  NO_AUTHENTICATION
} from 'actions/auth'

/**
 * @name initialState
*  @type { object }
*  @description - Initial state
*/
export const initialState = {
  token: '',
  details: {},
  isLoggedIn: false,
  isReady: true,
  error: {}
}

/**
*  @name reducer
*  @type { function }
*  @param { object } state
*  @param { object } action
*  @return { object }
*/
const reducer = (state = initialState, action) => {
  /**
  *  @type { switch }
  *  @return { object }
  */
  switch (action.type) {
    case LOG_OUT:
      return update(state, {
        token: {
          $set: ''
        },
        isLoggedIn: {
          $set: false
        },
        details: {
          $set: {}
        }
      })

    case STORE_USER_CREDENTIALS:
      return update(state, {
        details: {
          $set: action.user
        },
        isReady: {
          $set: true
        },
        isLoggedIn: {
          $set: true
        },
        token: {
          $set: action.token
        }
      })

    case NO_AUTHENTICATION:
      return update(state, {
        isReady: {
          $set: true
        }
      })

    default:
      return state
  }
}

export default reducer
