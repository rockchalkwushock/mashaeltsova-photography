import React from 'react'
import { render } from 'enzyme'

import CollagePhoto from '../../components/main/CollagePhoto'

describe('Component: CollagePhoto', () => {
  test('Renders without exploding', () => {
    const tree = render(<CollagePhoto />)
    expect(tree).toMatchSnapshot()
  })
})
