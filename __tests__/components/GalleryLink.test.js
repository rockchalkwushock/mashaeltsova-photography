import React from 'react'
import { render } from 'enzyme'

import { GalleryLink } from '../../components/main/GalleryButton'

describe('Component: GalleryLink', () => {
  test('Renders without exploding', () => {
    const tree = render(<GalleryLink />)
    expect(tree).toMatchSnapshot()
  })
})
