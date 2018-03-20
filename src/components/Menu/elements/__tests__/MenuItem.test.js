import React from 'react'

import { renderWithTheme } from '../../../../helpers'
import { MenuItem } from '../index'

describe('Styled Component: <MenuItem />', () => {
  let wrapper
  let wrapper2
  beforeAll(() => {
    wrapper = renderWithTheme(<MenuItem />)
    wrapper2 = renderWithTheme(<MenuItem state />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('opacity', '0')
    expect(wrapper).toHaveStyleRule('pointer-events', 'none')
    expect(wrapper).toHaveStyleRule(
      'transition',
      'opacity 0.3s ease-in-out 0.1s'
    )
  })
  test('should have toggled styles', () => {
    expect(wrapper2).toHaveStyleRule('opacity', '1')
  })
})
