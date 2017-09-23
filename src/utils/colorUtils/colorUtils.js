export const setOpacity = (color, opacity) => {
  if (~color.indexOf('rgb')) {
    if (!~color.indexOf('rgba')) {
      color = color.replace('rgb', 'rgba')
    }
    return `${color.slice(0, -1)}, ${opacity})`
  } else {
    return color
  }
}
