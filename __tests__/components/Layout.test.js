import React from 'react'
import { render } from 'enzyme'

import Layout from '../../components/commons/Layout'

const index = {
  pathname: '/'
}

const gallery = {
  pathname: '/gallery'
}

describe('Component: Layout', () => {
  test('Renders without exploding as .index', () => {
    const tree = render(<Layout url={index} />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .gallery', () => {
    const tree = render(<Layout url={gallery} />)
    expect(tree).toMatchSnapshot()
  })
})
