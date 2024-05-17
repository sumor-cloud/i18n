import { describe, expect, it } from '@jest/globals'

import stringify from '../src/stringify.js'

describe('stringify', () => {
  it('stringify with string', () => {
    const template = 'Hello, {name}!'
    const result = stringify(template, { name: 'World' })
    expect(result).toBe('Hello, World!')
  })
  it('stringify with number', () => {
    const template = 'Hello, {name}!'
    const result = stringify(template, { name: 42 })
    expect(result).toBe('Hello, 42!')
  })
  it('stringify with missing parameter', () => {
    const template = 'Hello, {name}!'
    const result = stringify(template, {})
    expect(result).toBe('Hello, {name}!')
  })
})
