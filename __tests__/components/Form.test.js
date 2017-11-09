import React from 'react'
import { render } from 'enzyme'

import Form from '../../components/commons/form'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'

const values = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phone: ''
}
const props = messages => ({
  errors: {},
  messages,
  onChange: () => {},
  onSubmit: () => {},
  values
})

// TODO: Test with Errors object for both languages.

describe('Component: Form', () => {
  test('Renders without exploding in English', () => {
    const tree = render(<Form {...props(en)} />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding in Russian', () => {
    const tree = render(<Form {...props(ru)} />)
    expect(tree).toMatchSnapshot()
  })
})
