import React from 'react'
import { render } from 'enzyme'

import Li from '../../components/commons/Li'

describe('Component: Li', () => {
  test('Renders without exploding', () => {
    const tree = render(<Li text="Hello World!" />)
    expect(tree).toMatchSnapshot()
  })
})
