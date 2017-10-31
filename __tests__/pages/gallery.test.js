import React from 'react'
import { render } from 'enzyme'

import Gallery from '../../pages/gallery'

const url = { pathname: '/gallery' }
const ids = ['a', 'b', 'c']

describe('Component: Gallery', () => {
  test('Renders without exploding', () => {
    const tree = render(<Gallery url={url} ids={ids} />)
    expect(tree).toMatchSnapshot()
  })
})
