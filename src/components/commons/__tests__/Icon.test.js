import React from 'react'
import { mount } from 'enzyme'

import Icon, { StyledIcon } from '../Icon'
import { renderWithTheme } from '../../../helpers'

describe('Component: <Icon />', () => {
  let wrapper
  let wrapper2
  beforeAll(() => {
    wrapper = mount(<Icon icon="bars" size="2x" />)
    wrapper2 = mount(<Icon icon="bars" menu size="2x" />)
  })
  test('should render markup as Icon', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should render markup as MenuIcon', () => {
    expect(wrapper2).toMatchSnapshot()
  })
  test('Icon should have props', () => {
    expect(wrapper.props()).toHaveProperty('icon', 'bars')
    expect(wrapper.props()).toHaveProperty('size', '2x')
  })
  test('MenuIcon should have props', () => {
    expect(wrapper2.props()).toHaveProperty('menu', true)
  })
})

describe('Styled Component: <StyledIcon />', () => {
  let wrapper
  let wrapper2
  beforeEach(() => {
    wrapper = renderWithTheme(<StyledIcon icon="bars" size="2x" />)
    wrapper2 = renderWithTheme(<StyledIcon icon="bars" menu size="2x" />)
  })
  test('should render markup as Icon', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should render markup as MenuIcon', () => {
    expect(wrapper2).toMatchSnapshot()
  })
  test('should have styles as Icon', () => {
    expect(wrapper.find('UnstyledIcon')).toHaveStyleRule('margin-left', 'unset')
    expect(wrapper.find('UnstyledIcon')).toHaveStyleRule('margin-top', 'unset')
  })
  test('should have styles as MenuIcon', () => {
    expect(wrapper2.find('UnstyledIcon')).toHaveStyleRule('margin-left', '10px')
    expect(wrapper2.find('UnstyledIcon')).toHaveStyleRule('margin-top', '10px')
  })
})
