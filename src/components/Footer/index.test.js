import React from 'react'

import { renderWithTheme } from '../../helpers'
import AppFooter from './'

describe('Component: <AppFooter />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(<AppFooter />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
