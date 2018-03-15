import React from 'react'
import { mount } from 'enzyme'

import Wrapper from './'
import { renderWithTheme } from '../../helpers'

describe('Styled Component: <Wrapper />', () => {
  test('should render markup', () => {
    const wrapper = mount(<Wrapper />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    const wrapper = renderWithTheme(<Wrapper />)
    expect(wrapper).toHaveStyleRule('background-color', '#fedcd2')
    expect(wrapper).toHaveStyleRule('min-height', '100vh')
    expect(wrapper).toHaveStyleRule('max-width', '100vw')
  })
})
