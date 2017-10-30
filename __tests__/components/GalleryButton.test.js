import React from 'react'
import { render } from 'enzyme'

import GalleryButton from '../../components/main/GalleryButton'

describe('Component: GalleryButton', () => {
  test('Renders without exploding', () => {
    const tree = render(<GalleryButton text="go here" url="/" />)
    expect(tree).toMatchSnapshot()
  })
})
