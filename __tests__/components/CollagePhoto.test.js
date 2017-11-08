import React from 'react'
import { render } from 'enzyme'

import Collage from '../../components/commons/Collage'

describe('Component: Collage', () => {
  test('Renders without exploding', () => {
    const tree = render(<Collage />)
    expect(tree).toMatchSnapshot()
  })
})
