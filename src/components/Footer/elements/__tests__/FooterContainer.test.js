import React from 'react'

import { renderWithTheme } from '../../../../helpers'
import FooterContainer from '../FooterContainer'

describe('Styled Component: <FooterContainer />', () => {
  let wrapper
  let wrapper2
  beforeAll(() => {
    wrapper = renderWithTheme(<FooterContainer />)
    wrapper2 = renderWithTheme(<FooterContainer left />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('text-align', 'center')
    expect(wrapper2).toHaveStyleRule('text-align', 'center')
  })
  test('should have styles as right when bigger viewport', () => {
    expect(wrapper).toHaveStyleRule('text-align', 'right', {
      media: '(min-width:736px)'
    })
  })
  test('should have styles as left when bigger viewport', () => {
    expect(wrapper2).toHaveStyleRule('text-align', 'left', {
      media: '(min-width:736px)'
    })
  })
})
