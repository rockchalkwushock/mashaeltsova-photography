import React from 'react'
import { render } from 'enzyme'

import Header from '../../components/commons/Header'

describe('Component: Header', () => {
  test('Renders without exploding from /', () => {
    const tree = render(<Header className="index" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding from /gallery', () => {
    const tree = render(<Header className="gallery" />)
    expect(tree).toMatchSnapshot()
  })
})
