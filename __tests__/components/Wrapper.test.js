import React from 'react'
import { render } from 'enzyme'

import Wrapper from '../../components/commons/Wrapper'

describe('Component: Wrapper', () => {
  test('Renders without exploding', () => {
    const tree = render(<Wrapper />)
    expect(tree).toMatchSnapshot()
  })
})
