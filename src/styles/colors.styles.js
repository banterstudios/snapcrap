import { setOpacity } from 'utils/colorUtils'

const darkLiverHorses = '#5B4633'
const cafeNoir = '#4C341E'
const white = '#fff'
const black = '#000'
const spanishGray = '#979B9F'
const transparent = 'transparent'

// Backgrounds
const backgroundPrimary = darkLiverHorses
const backgroundSecondary = cafeNoir

// Buttons
const buttonPrimary = white
const buttonDisabled = setOpacity(buttonPrimary, 0.5)

// Texts
const textLight = white
const textDark = black
const textPrimary = spanishGray

// Forms
const placeholderPrimary = spanishGray

// Linebreak
const linebreakPrimary = spanishGray

export {
  backgroundPrimary,
  backgroundSecondary,
  textLight,
  textDark,
  placeholderPrimary,
  linebreakPrimary,
  transparent,
  buttonPrimary,
  textPrimary,
  buttonDisabled
}
