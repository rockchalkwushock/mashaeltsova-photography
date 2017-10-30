import React from 'react'
import { render } from 'enzyme'

import Header from '../../components/commons/Header'

describe('Component: Header', () => {
  test('Renders without exploding', () => {
    const tree = render(<Header />)
    expect(tree).toMatchSnapshot()
  })
})
