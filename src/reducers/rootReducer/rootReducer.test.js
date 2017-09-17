import rootReducer from './rootReducer'

describe('Reducers - rootReducer', () => {
  it('should exist', () => {
    expect(rootReducer).toBeDefined()
  })

  it('should be an object', () => {
    expect(rootReducer).toBeInstanceOf(Object)
  })
})
