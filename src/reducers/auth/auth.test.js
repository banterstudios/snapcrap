import reducer, { initialState } from './auth'

describe('Reducers - auth', () => {
  test('should return the initial state', () => {
    expect(reducer(initialState, { type: '@@/UNKNOWN' })).toEqual(initialState)
  })
})
