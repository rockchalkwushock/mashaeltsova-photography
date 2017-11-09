import React from 'react'
import { render } from 'enzyme'

import { Index } from '../../pages/index'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'
import { makeProps } from '../../lib'

describe('Component: Index', () => {
  test('Renders without exploding in English', () => {
    const tree = render(<Index {...makeProps('en', en, '/')} />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding in Russian', () => {
    const tree = render(<Index {...makeProps('ru', ru, '/')} />)
    expect(tree).toMatchSnapshot()
  })
})
