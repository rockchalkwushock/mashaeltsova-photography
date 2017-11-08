import React from 'react'
import { render } from 'enzyme'

import Layout from '../../components/layout'
import en from '../../i18n/en.json'
import ru from '../../i18n/ru.json'

const index = {
  pathname: '/'
}

const gallery = {
  pathname: '/gallery'
}

describe('Component: Layout', () => {
  describe('English', () => {
    test('Renders without exploding as .index', () => {
      const tree = render(<Layout messages={en} url={index} />)
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .gallery', () => {
      const tree = render(<Layout messages={en} url={gallery} />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Russian', () => {
    test('Renders without exploding as .index', () => {
      const tree = render(<Layout messages={ru} url={index} />)
      expect(tree).toMatchSnapshot()
    })
    test('Renders without exploding as .gallery', () => {
      const tree = render(<Layout messages={ru} url={gallery} />)
      expect(tree).toMatchSnapshot()
    })
  })
})
