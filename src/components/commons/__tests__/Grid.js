import React from 'react'

import HomeGrid from '../Grid'
import { renderWithTheme } from '../../../helpers'

describe('Styled Component: <HomeGrid />', () => {
  test('should render markup', () => {
    const wrapper = renderWithTheme(<HomeGrid />)
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    const wrapper = renderWithTheme(<HomeGrid />)
    expect(wrapper).toHaveStyleRule('display', 'grid')
    expect(wrapper).toHaveStyleRule('grid-gap', '20px')
    expect(wrapper).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(200px,300px))'
    )
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('width', '100%')

    expect(wrapper).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(200px,400px))',
      {
        media: '(min-width:540px)'
      }
    )
    expect(wrapper).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(300px,1fr))',
      {
        media: '(min-width:736px)'
      }
    )
    expect(wrapper).toHaveStyleRule(
      'grid-template-columns',
      'repeat(auto-fit,minmax(200px,1fr))',
      {
        media: '(min-width:900px)'
      }
    )
  })
})
