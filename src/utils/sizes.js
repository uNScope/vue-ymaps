export const pxSize = (value) => {
  return value + (typeof value === 'number' ? 'px' : '')
}
