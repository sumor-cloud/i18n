// Apply parameters to i18n template

export default (message, parameters) => {
  return message.replace(/{([^{}]*)}/g, (parameterNameString, parameterName) => {
    const value = parameters[parameterName]
    return typeof value === 'string' || typeof value === 'number' ? value : parameterNameString
  })
}
