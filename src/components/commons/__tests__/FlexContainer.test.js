import React from 'react'
import { mount, shallow } from 'enzyme'

import FlexContainer from '../FlexContainer'

describe('Styled Component: <FlexContainer />', () => {
  test('should render markup', () => {
    const wrapper = mount(<FlexContainer />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have default props', () => {
    const wrapper = mount(<FlexContainer />)
    expect(wrapper.props()).toHaveProperty('align', 'inherit')
    expect(wrapper.props()).toHaveProperty('direction', 'row')
    expect(wrapper.props()).toHaveProperty('justify', 'inherit')
    expect(wrapper.props()).toHaveProperty('tAlign', 'inherit')
  })
  test('should have default styles', () => {
    const wrapper = shallow(<FlexContainer />)
    expect(wrapper).toHaveStyleRule('align-items', 'inherit')
    expect(wrapper).toHaveStyleRule('flex-direction', 'row')
    expect(wrapper).toHaveStyleRule('justify-content', 'inherit')
    expect(wrapper).toHaveStyleRule('text-align', 'inherit')
  })
  test('should have updated styles', () => {
    const wrapper = shallow(
      <FlexContainer
        align="center"
        direction="column"
        justify="center"
        tAlign="center"
      />
    )
    expect(wrapper).toHaveStyleRule('align-items', 'center')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
})
