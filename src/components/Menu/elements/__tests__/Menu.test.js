import React from 'react'

import { renderWithTheme } from '../../../../helpers'
import { Menu } from '../index'

describe('Styled Component: <Menu />', () => {
  let wrapper
  let wrapper2
  beforeAll(() => {
    wrapper = renderWithTheme(<Menu />)
    wrapper2 = renderWithTheme(<Menu state />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#333')
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '0px 2px 5px 2px rgba(0,0,0,0.3)'
    )
    expect(wrapper).toHaveStyleRule('height', '60px')
    expect(wrapper).toHaveStyleRule(
      'transition',
      'height 0.3s ease-in-out 0.05s'
    )
    expect(wrapper).toHaveStyleRule('width', '100vw')
  })
  test('should have toggled styles', () => {
    expect(wrapper2).toHaveStyleRule('height', '160px')
  })
})
