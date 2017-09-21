import {
  backgroundSecondary,
  textLight
} from 'styles/colors'

export const constructNavigatorOptions = ({ title }) => ({
  title,
  headerStyle: {
    backgroundColor: backgroundSecondary,
    elevation: null
  },
  headerTintColor: textLight
})
