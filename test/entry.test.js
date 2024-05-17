import { describe, expect, it } from '@jest/globals'

import getI18n from '../src/index.js'

describe('entry', () => {
  it('pass parameters', () => {
    const i18n = getI18n('en', {
      en: {
        greeting: 'Hello, {name}'
      }
    })
    expect(i18n('greeting', { name: 'John' })).toEqual('Hello, John')
  })

  it('backwards compatible for origin', () => {
    const i18n = getI18n('zh-TW', {
      origin: {
        demo: {
          hello: 'Hello',
          welcome: 'Welcome'
        }
      },
      'zh-TW': {
        demo: {
          hello: '妳好'
        }
      }
    })
    expect(i18n('demo.hello')).toEqual('妳好')
    expect(i18n('demo.welcome')).toEqual('Welcome')
  })
  it('backwards compatible for en', () => {
    const i18n = getI18n('zh-TW', {
      en: {
        demo: {
          hello: 'Hello',
          welcome: 'Welcome'
        }
      },
      'zh-TW': {
        demo: {
          hello: '妳好'
        }
      }
    })
    expect(i18n('demo.hello')).toEqual('妳好')
    expect(i18n('demo.welcome')).toEqual('Welcome')
  })
  it('backwards compatible for zh', () => {
    const i18n = getI18n('zh-TW', {
      zh: {
        demo: {
          hello: 'Hello',
          welcome: 'Welcome'
        }
      },
      'zh-TW': {
        demo: {
          hello: '妳好'
        }
      }
    })
    expect(i18n('demo.hello')).toEqual('妳好')
    expect(i18n('demo.welcome')).toEqual('Welcome')
  })
  it('backwards compatible for en-US', () => {
    const i18n = getI18n('zh-TW', {
      'en-US': {
        demo: {
          hello: 'Hello',
          welcome: 'Welcome'
        }
      },
      'zh-TW': {
        demo: {
          hello: '妳好'
        }
      }
    })
    expect(i18n('demo.hello')).toEqual('妳好')
    expect(i18n('demo.welcome')).toEqual('Welcome')
  })
  it('backwards compatible for zh-CN', () => {
    const i18n = getI18n('zh-TW', {
      'zh-CN': {
        demo: {
          hello: 'Hello',
          welcome: 'Welcome'
        }
      },
      'zh-TW': {
        demo: {
          hello: '妳好'
        }
      }
    })
    expect(i18n('demo.hello')).toEqual('妳好')
    expect(i18n('demo.welcome')).toEqual('Welcome')
  })

  it('apply to multiple levels', () => {
    const i18n = getI18n('zh-TW', {
      en: {
        demo: {
          hello: 'Hello',
          welcome: 'Welcome',
          greeting: 'Hello, {name}',
          test: 'Test'
        }
      },
      zh: {
        demo: {
          hello: '你好',
          welcome: '欢迎'
        }
      },
      'zh-TW': {
        demo: {
          hello: '妳好',
          greeting: '妳好, {name}'
        }
      }
    })

    // match zh-TW
    expect(i18n('demo.hello')).toEqual('妳好')
    expect(i18n('demo.greeting', { name: 'John' })).toEqual('妳好, John')

    // match zh
    expect(i18n('demo.welcome')).toEqual('欢迎')

    // match en
    expect(i18n('demo.test')).toEqual('Test')
  })
})
