import React from 'react'
import { render } from 'enzyme'

import Layout from '../../components/commons/Layout'

describe('Component: Layout', () => {
  test('Renders without exploding', () => {
    const tree = render(<Layout />)
    expect(tree).toMatchSnapshot()
  })
})
