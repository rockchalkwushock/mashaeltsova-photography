import React from 'react'
import { render } from 'enzyme'

import Photo from '../../components/commons/Photo'

describe('Component: Photo', () => {
  test('Renders without exploding as site logo', () => {
    const tree = render(
      <Photo alt="Masha Eltsova Photography Logo" logo publicId="watermark" />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as a regular image', () => {
    const tree = render(<Photo publicId="family_black_white" />)
    expect(tree).toMatchSnapshot()
  })
})
