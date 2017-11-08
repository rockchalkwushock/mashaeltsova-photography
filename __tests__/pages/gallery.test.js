import React from 'react'
import { render } from 'enzyme'

import { Gallery } from '../../pages/gallery'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'
import { makeProps } from '../../lib'

const ids = ['a', 'b', 'c']

describe('Component: Gallery', () => {
  test('Renders without exploding in English', () => {
    const tree = render(
      <Gallery {...makeProps('en', en, '/gallery')} photos={ids} />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding in Russian', () => {
    const tree = render(
      <Gallery {...makeProps('ru', ru, '/gallery')} photos={ids} />
    )
    expect(tree).toMatchSnapshot()
  })
})
