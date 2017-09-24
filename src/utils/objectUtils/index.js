import update from 'immutability-helper'

/**
 *  omit
 *  @param  {Object} object
 *  @param  {Array} props
 *  @description Removes keys from an object based on props array
 *  @return {Object}
 */
export const omit = (object, props) => {
  if (object == null) {
    return {}
  }

  const newObject = update(object, {})

  if (typeof props === 'string') {
    delete newObject[props]
  } else {
    props.forEach(prop => {
      delete newObject[prop]
    })
  }

  return newObject
}
