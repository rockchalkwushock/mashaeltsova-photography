import React from 'react'
import { mount } from 'enzyme'

import StyledPhoto from './'

const resolutions = {
  base64: '/static/pic.jpg',
  height: 200,
  src: '/static/pic.jpg',
  srcSet: '/static/pic.jpg',
  srcWebP: '/static/pic.jpg',
  srcSetWebP: '/static/pic.jpg',
  width: 496
}

describe('Styled Component: <StyledPhoto />', () => {
  test('should render markup', () => {
    const wrapper = mount(<StyledPhoto resolutions={resolutions} />)
    expect(wrapper).toMatchSnapshot()
  })
})
