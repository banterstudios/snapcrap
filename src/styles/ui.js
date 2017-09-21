import {
  Dimensions
} from 'react-native'

const headerHeight = 70
const heightWithHeader = Dimensions.get('screen').height - headerHeight

export {
  headerHeight,
  heightWithHeader
}
