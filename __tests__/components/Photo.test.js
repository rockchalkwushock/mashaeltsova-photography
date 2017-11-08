import React from 'react'
import { render } from 'enzyme'

import Photo from '../../components/commons/photo/'

describe('Component: Photo', () => {
  test('Renders without exploding as site logo', () => {
    const tree = render(<Photo logo publicId="watermark" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as a regular image', () => {
    const tree = render(
      <Photo onDismiss={() => {}} publicId="family_black_white" />
    )
    expect(tree).toMatchSnapshot()
  })
})
