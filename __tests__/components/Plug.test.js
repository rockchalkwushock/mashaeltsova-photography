import React from 'react'
import { render } from 'enzyme'

import Plug from '../../components/main/Plug'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'

describe('Component: Plug', () => {
  test('Renders without exploding in English', () => {
    const tree = render(<Plug messages={en} />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding in Russian', () => {
    const tree = render(<Plug messages={ru} />)
    expect(tree).toMatchSnapshot()
  })
})
