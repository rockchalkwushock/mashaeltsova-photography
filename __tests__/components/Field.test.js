import React from 'react'
import { render } from 'enzyme'

import Field from '../../components/commons/form/Field'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'

// TODO: Test Error Messages display in both languages.

describe('Component: Field', () => {
  describe('English:', () => {
    test('Renders without exploding as .firstName', () => {
      const tree = render(
        <Field className="firstName" text={en.formFirstName} type="text" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .lastName', () => {
      const tree = render(
        <Field className="lastName" text={en.formLastName} type="text" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .email', () => {
      const tree = render(
        <Field className="email" text={en.formEmail} type="email" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .phone', () => {
      const tree = render(
        <Field className="phone" text={en.formPhone} type="tel" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .message', () => {
      const tree = render(
        <Field className="message" text={en.formMessage} type="text" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .button', () => {
      const tree = render(
        <Field className="button" text={en.buttonBooking} type="submit" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Russian:', () => {
    test('Renders without exploding as .firstName', () => {
      const tree = render(
        <Field className="firstName" text={ru.formFirstName} type="text" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .lastName', () => {
      const tree = render(
        <Field className="lastName" text={ru.formLastName} type="text" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .email', () => {
      const tree = render(
        <Field className="email" text={ru.formEmail} type="email" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .phone', () => {
      const tree = render(
        <Field className="phone" text={ru.formPhone} type="tel" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .message', () => {
      const tree = render(
        <Field className="message" text={ru.formMessage} type="text" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .button', () => {
      const tree = render(
        <Field className="button" text={ru.buttonBooking} type="submit" />
      )
      expect(tree).toMatchSnapshot()
    })
  })
})
