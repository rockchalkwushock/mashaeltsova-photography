import React from 'react'
import { render } from 'enzyme'

import A from '../../components/commons/A'

describe('Component: A', () => {
  test('Renders without exploding as navigation link', () => {
    const tree = render(
      <A
        className="linkToGallery"
        navigate
        text="Visit Gallery"
        url="/gallery"
      />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as button', () => {
    const tree = render(<A onClick={() => {}} text="Family" />)
    expect(tree).toMatchSnapshot()
  })
})
