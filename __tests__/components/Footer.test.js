import React from 'react'
import { render } from 'enzyme'

import Footer from '../../components/layout/Footer'

describe('Component: Footer', () => {
  test('Renders without exploding', () => {
    const tree = render(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})
