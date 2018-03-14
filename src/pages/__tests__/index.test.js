import React from 'react'
import { mount, shallow } from 'enzyme'

import HomePage from '../'

describe('Pages: HomePage', () => {
  test('should render markup', () => {
    const wrapper = mount(<HomePage />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have props"', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper.find('Title').props()).toHaveProperty(
      'text',
      'Refactor Engage!'
    )
  })
})
