import React from 'react'
import { render } from 'enzyme'

import Index from '../../pages/index'

const url = { pathname: '/' }

describe('Component: Index', () => {
  test('Renders without exploding', () => {
    const tree = render(<Index url={url} />)
    expect(tree).toMatchSnapshot()
  })
})
