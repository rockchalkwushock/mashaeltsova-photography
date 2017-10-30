import React from 'react'
import { render } from 'enzyme'

import Photo from '../../components/commons/Photo'

describe('Component: Photo', () => {
  test('Renders without exploding', () => {
    const tree = render(
      <Photo alt="Masha Eltsova Photography Logo" publicId="watermark" />
    )
    expect(tree).toMatchSnapshot()
  })
})
