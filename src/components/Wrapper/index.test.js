import React from 'react'

import { renderWithTheme } from '../../helpers'
import Wrapper from './'

describe('Styled Component: <Wrapper />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(<Wrapper />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('min-height', '100vh')
  })
})
