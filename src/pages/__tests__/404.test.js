import React from 'react'
import { mount, shallow } from 'enzyme'

import NotFound from '../404'

describe('Pages: 404', () => {
  test('should render markup', () => {
    const wrapper = mount(<NotFound />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have props', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find('Title').props()).toHaveProperty('color', 'slategrey')
    expect(wrapper.find('Title').props()).toHaveProperty('text', 'NOT FOUND')
  })
})
