import React from 'react'
import { render } from 'enzyme'

import Form from '../../components/main/Form'

const disabled = true
const onChange = () => {}
const onSubmit = () => {}
const values = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phone: ''
}

describe('Component: Form', () => {
  test('Renders without exploding', () => {
    const tree = render(
      <Form
        disabled={disabled}
        onChange={onChange}
        onSubmit={onSubmit}
        values={values}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
