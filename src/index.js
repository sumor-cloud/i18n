import pick from './pick.js'
import stringify from './stringify.js'
export default (languageCode, config) => {
  return (key, parameters = {}) => {
    if (!key) {
      throw new Error('i18n key is required')
    }
    const originConfig =
      config.origin || config.en || config['en-US'] || config.zh || config['zh-CN']

    const language = languageCode.split('-')[0]

    const languageConfig = config[language]

    const regionConfig = config[languageCode]

    const matched = pick(regionConfig, key) || pick(languageConfig, key) || pick(originConfig, key)

    if (matched === undefined) {
      throw new Error(`i18n text is not found for ${key}`)
    }

    return stringify(matched, parameters)
  }
}
