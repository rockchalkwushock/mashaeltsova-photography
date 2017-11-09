import React from 'react'
import { render } from 'enzyme'

import P from '../../components/commons/P'

describe('Component: P', () => {
  test('Renders without exploding as .services', () => {
    const tree = render(<P className="services" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding', () => {
    const tree = render(<P />)
    expect(tree).toMatchSnapshot()
  })
})
