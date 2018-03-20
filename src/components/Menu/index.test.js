import React from 'react'
import { mount } from 'enzyme'

import AppMenu from './'

describe('Component: <AppMenu />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(<AppMenu />)
  })
  test('should render markup pre-click', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should toggle state', () => {
    expect(wrapper.state('isOpen')).toEqual(false)
    wrapper.find('Icon').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)
    wrapper.find('Icon').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(false)
  })
  test('should render markup post-click', () => {
    wrapper.find('Icon').simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})
