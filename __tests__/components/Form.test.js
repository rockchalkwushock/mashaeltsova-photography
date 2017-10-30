import React from 'react'
import { render } from 'enzyme'

import Form from '../../components/main/Form'

describe('Component: Form', () => {
  test('Renders without exploding', () => {
    const tree = render(<Form />)
    expect(tree).toMatchSnapshot()
  })
})
