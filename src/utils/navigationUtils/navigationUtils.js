import {
  backgroundSecondary,
  textLight
} from 'styles/colors'

import update from 'immutability-helper'

const defaultsNavOpts = {
  title: '',
  headerStyle: {
    backgroundColor: backgroundSecondary,
    elevation: null
  },
  headerTintColor: textLight
}

export const constructNavigatorOptions = (props) => {
  return update(defaultsNavOpts, {
    $merge: {
      ...props
    }
  })
}
