import React from 'react'

import StyledPhoto from './'
import { renderWithTheme } from '../../../helpers'

const photo = {
  sizes: {
    base64: '/static/pic.jpg',
    height: 200,
    src: '/static/pic.jpg',
    srcSet: '/static/pic.jpg',
    srcWebp: '/static/pic.jpg',
    srcSetWebp: '/static/pic.jpg',
    width: 496
  }
}

describe('Styled Component: <StyledPhoto />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(
      <StyledPhoto alt="pic" sizes={photo.sizes} title="pic" />
    )
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
  // REVIEW: Fails to see styles???
  test.skip('should have styles', () => {
    expect(wrapper).toHaveStyleRule('border', 'none')
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '2px 2px 10px 1px rgba(0, 0, 0, 1)'
    )
  })
})
