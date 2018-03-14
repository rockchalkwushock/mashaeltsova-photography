import React from 'react'
import { mount, shallow } from 'enzyme'

import Title, { StyledTitle } from '../Title'

describe('Component: <Title />', () => {
  test('should render markup', () => {
    const wrapper = mount(<Title text="Hello World!" />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have props', () => {
    const wrapper = shallow(<Title color="blue" text="Hello World!" />)
    expect(wrapper.props()).toHaveProperty('children', 'Hello World!')
    expect(wrapper.props()).toHaveProperty('color', 'blue')
  })
})

describe('Styled Component: <StyledTitle />', () => {
  test('should render markup as default', () => {
    const wrapper = shallow(<StyledTitle />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('color', 'lightcoral')
  })
  test('should render markup with props', () => {
    const wrapper = shallow(<StyledTitle color="blue" />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('color', 'blue')
  })
})
