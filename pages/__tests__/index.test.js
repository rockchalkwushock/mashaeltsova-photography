import React from 'react'
import { shallow, render } from 'enzyme'

import Index from '../'

describe('Index Page', () => {
  test('shallow', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.text()).toEqual('Hello World!')
  })

  test('render', () => {
    const wrapper = render(<Index />)
    expect(wrapper.text()).toEqual('Hello World!')
  })

  test('snapshot', () => {
    const tree = render(<Index />)
    expect(tree).toMatchSnapshot()
  })
})
