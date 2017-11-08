import React from 'react'
import { render } from 'enzyme'

import BookingForm from '../../containers/FormContainer'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'

describe('Component: BookingForm', () => {
  test('Renders without exploding in English', () => {
    const tree = render(<BookingForm locale="en" messages={en} />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding in Russian', () => {
    const tree = render(<BookingForm locale="ru" messages={ru} />)
    expect(tree).toMatchSnapshot()
  })
})
