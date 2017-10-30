import React from 'react'
import { render } from 'enzyme'

import Field from '../../components/main/Field'

describe('Component: Field', () => {
  test('Renders without exploding as .firstName', () => {
    const tree = render(
      <Field className="firstName" text="First Name" type="text" />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .lastName', () => {
    const tree = render(
      <Field className="lastName" text="Last Name" type="text" />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .email', () => {
    const tree = render(<Field className="email" text="Email" type="email" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .phone', () => {
    const tree = render(<Field className="phone" text="Phone" type="tel" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .message', () => {
    const tree = render(
      <Field className="message" text="Short Message" type="text" />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .button', () => {
    const tree = render(
      <Field className="button" text="Book Now!" type="submit" />
    )
    expect(tree).toMatchSnapshot()
  })
})
