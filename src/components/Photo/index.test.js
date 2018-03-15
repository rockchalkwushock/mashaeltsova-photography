import React from 'react'
import { mount } from 'enzyme'

import Photo from './'

const photo = {
  sizes: {
    base64: '/static/pic.jpg',
    height: 200,
    src: '/static/pic.jpg',
    srcSet: '/static/pic.jpg',
    srcWebP: '/static/pic.jpg',
    srcSetWebP: '/static/pic.jpg',
    width: 496
  }
}

describe.skip('Component: <Photo />', () => {
  test('should render markup', () => {
    // REVIEW:
    // TypeError: Cannot read property 'src' of undefined
    const wrapper = mount(<Photo alt="pic" size={photo.sizes} title="pic" />)
    expect(wrapper).toMatchSnapshot()
  })
})
