import React from 'react'
import { render } from 'enzyme'

import BookingForm from '../../containers/FormContainer'

describe('Component: BookingForm', () => {
  test('Renders without exploding', () => {
    const tree = render(<BookingForm />)
    expect(tree).toMatchSnapshot()
  })
})
