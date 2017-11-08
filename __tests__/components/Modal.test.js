import React from 'react'
import { render } from 'enzyme'

import Modal from '../../components/commons/form/FormModal'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'

describe('Component: Modal', () => {
  describe('Error State', () => {
    test('Renders without exploding in English', () => {
      const tree = render(<Modal msg={en.modalError} status="error" />)
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding in Russian', () => {
      const tree = render(<Modal msg={ru.modalError} status="error" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Loading State', () => {
    test('Renders without exploding in English', () => {
      const tree = render(<Modal msg={en.modalLoading} status="loading" />)
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding in Russian', () => {
      const tree = render(<Modal msg={ru.modalLoading} status="loading" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Success State', () => {
    test('Renders without exploding in English', () => {
      const tree = render(<Modal msg={en.modalSuccess} status="success" />)
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding in Russian', () => {
      const tree = render(<Modal msg={ru.modalSuccess} status="success" />)
      expect(tree).toMatchSnapshot()
    })
  })
})
