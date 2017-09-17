import {
  LOG_OUT,
  STORE_USER_CREDENTIALS,
  NO_AUTHENTICATION
} from './auth'

describe(`Actions: ${LOG_OUT}`, () => {
  test('should be equal', () => {
    expect(LOG_OUT).toEqual(LOG_OUT)
  })
})

describe(`Actions: ${STORE_USER_CREDENTIALS}`, () => {
  test('should be equal', () => {
    expect(STORE_USER_CREDENTIALS).toEqual(STORE_USER_CREDENTIALS)
  })
})

describe(`Actions: ${NO_AUTHENTICATION}`, () => {
  test('should be equal', () => {
    expect(NO_AUTHENTICATION).toEqual(NO_AUTHENTICATION)
  })
})
