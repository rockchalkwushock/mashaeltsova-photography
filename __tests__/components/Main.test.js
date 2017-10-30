import React from 'react'
import { render } from 'enzyme'

import Main from '../../components/main/Main'

describe('Component: Main', () => {
  test('Renders without exploding', () => {
    const tree = render(<Main />)
    expect(tree).toMatchSnapshot()
  })
})
