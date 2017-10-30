import React from 'react'
import { render } from 'enzyme'

import Container from '../../components/commons/Container'

describe('Component: Container', () => {
  test('Renders without exploding as .copyright', () => {
    const tree = render(<Container className="copyright" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .social', () => {
    const tree = render(<Container className="social" />)
    expect(tree).toMatchSnapshot()
  })
})
