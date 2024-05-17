export default (obj, keyString) => {
  const keys = keyString.split('.')
  let result = obj
  for (const key of keys) {
    if (result === undefined) {
      return undefined
    }
    result = result[key]
  }
  return result
}
