import React from 'react'
import { render } from 'enzyme'

import Index from '../../pages/index'

describe('Component: Index', () => {
  test('Renders without exploding', () => {
    const tree = render(<Index />)
    expect(tree).toMatchSnapshot()
  })
})
