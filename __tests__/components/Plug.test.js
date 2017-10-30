import React from 'react'
import { render } from 'enzyme'

import Plug from '../../components/main/Plug'

describe('Component: Plug', () => {
  test('Renders without exploding', () => {
    const tree = render(<Plug />)
    expect(tree).toMatchSnapshot()
  })
})
