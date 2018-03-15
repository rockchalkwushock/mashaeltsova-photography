import React from 'react'

import Wrapper from './'
import { renderWithTheme } from '../../helpers'

describe('Styled Component: <Wrapper />', () => {
  test('should render markup', () => {
    const wrapper = renderWithTheme(<Wrapper />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    const wrapper = renderWithTheme(<Wrapper />)
    expect(wrapper).toHaveStyleRule('background-color', '#ffffff')
    expect(wrapper).toHaveStyleRule('min-height', '100vh')
    expect(wrapper).toHaveStyleRule('max-width', '100vw')
    expect(wrapper).toHaveStyleRule('padding', '0 1em')
    expect(wrapper).toHaveStyleRule('padding', '0 4em', {
      media: '(min-width:736px)'
    })
  })
})
