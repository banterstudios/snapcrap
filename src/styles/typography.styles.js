import {
  StyleSheet
} from 'react-native'

/*
  Sizes
 */
export const h1Size = 32
export const h2Size = 28
export const h3Size = 24
export const h4Size = 20
export const h5Size = 18
export const h6Size = 16

export const textSize = 14
export const footNoteSize = 12

/*
  Weights
 */
export const extraLight = '100'
export const regular = '400'
export const semiBold = '600'

/*
  Typography
 */
export const h1 = {
  fontSize: h1Size,
  fontWeight: semiBold
}

export const h2 = {
  fontSize: h2Size,
  fontWeight: regular
}

export const h3 = {
  fontSize: h3Size,
  fontWeight: regular
}

export const h4 = {
  fontSize: h4Size,
  fontWeight: regular
}

export const h5 = {
  fontSize: h5Size,
  fontWeight: extraLight
}

export const h6 = {
  fontSize: h6Size,
  fontWeight: extraLight
}

export const text = {
  fontSize: textSize,
  fontWeight: extraLight
}

export const footNote = {
  fontSize: footNoteSize,
  fontWeight: extraLight
}

export default StyleSheet.create({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  text,
  footNote
})
