export const pick = (keys = [], object) => {
  keys.reduce((acc, key) => ({
    ...acc,
    [key]: object[key]
  }), {})
}
