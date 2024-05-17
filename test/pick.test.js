import { describe, expect, it } from '@jest/globals'

import pick from '../src/pick.js'

describe('pick', () => {
  it('pick 1 level', () => {
    const matched = pick({ a: 'A', b: 'B', c: 'C' }, 'a')
    expect(matched).toEqual('A')
  })
  it('pick 2 level', () => {
    const matched = pick(
      {
        a: {
          aa: 'AA',
          ab: 'AB',
          ac: 'AC'
        },
        b: 'B',
        c: 'C'
      },
      'a.aa'
    )
    expect(matched).toEqual('AA')
  })
  it('pick 3 level', () => {
    const matched = pick(
      {
        a: {
          aa: {
            aaa: 'AAA',
            aab: 'AAB',
            aac: 'AAC'
          },
          ab: 'AB',
          ac: 'AC'
        },
        b: 'B',
        c: 'C'
      },
      'a.aa.aaa'
    )
    expect(matched).toEqual('AAA')
  })
  it('pick undefined', () => {
    const matched = pick(undefined, 'd')
    expect(matched).toBeUndefined()
  })
  it('pick not exist', () => {
    const matched = pick({ a: 'A', b: 'B', c: 'C' }, 'd')
    expect(matched).toBeUndefined()
  })
  it('pick not exist 2 level', () => {
    const matched = pick(
      {
        a: {
          aa: 'AA',
          ab: 'AB',
          ac: 'AC'
        },
        b: 'B',
        c: 'C'
      },
      'a.ad'
    )
    expect(matched).toBeUndefined()
  })
  it('pick 2 levels with not exist level 1', () => {
    const matched = pick(
      {
        a: {
          aa: 'AA',
          ab: 'AB',
          ac: 'AC'
        },
        b: 'B',
        c: 'C'
      },
      'd.aa'
    )
    expect(matched).toBeUndefined()
  })
})
