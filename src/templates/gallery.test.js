import React from 'react'
import { mount } from 'enzyme'

import { GalleryTemplate } from './gallery'

const pathContext = {
  photos: [
    {
      node: {
        id: 1,
        resolutions: {
          base64: '/static/pic.jpg',
          height: 200,
          src: '/static/pic.jpg',
          srcSet: '/static/pic.jpg',
          srcWebp: '/static/pic.jpg',
          srcSetWebp: '/static/pic.jpg',
          width: 200
        }
      }
    }
  ]
}

describe('Template: <Gallery />', () => {
  test('should render markup', () => {
    const wrapper = mount(<GalleryTemplate pathContext={pathContext} />)
    expect(wrapper).toMatchSnapshot()
  })
})
