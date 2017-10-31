import React from 'react'
import { render } from 'enzyme'

import Main from '../../components/commons/Main'

describe('Component: Main', () => {
  test('Renders without exploding as .index', () => {
    const tree = render(<Main className="index" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .gallery', () => {
    const tree = render(<Main className="gallery" />)
    expect(tree).toMatchSnapshot()
  })
})
