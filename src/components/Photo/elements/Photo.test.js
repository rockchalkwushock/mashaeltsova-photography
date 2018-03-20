import React from 'react'

import { renderWithTheme } from '../../../helpers'
import Photo from './Photo'

describe('Styled Component: <Photo />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(<Photo sizes={{}} />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
  // REVIEW
  // Cannot see styles???
  test.skip('should have styles', () => {
    expect(wrapper).toHaveStyleRule('border', 'none')
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '2px 2px 10px 1px rgba(0,0,0,1)'
    )
    expect(wrapper).toHaveStyleRule('height', '240px')
    expect(wrapper).toHaveStyleRule('width', '240px')
    expect(wrapper).toHaveStyleRule('width', '400px', {
      media: '(min-width:540px)'
    })
    expect(wrapper).toHaveStyleRule('width', '300px', {
      media: '(min-width:736px)'
    })
  })
})
