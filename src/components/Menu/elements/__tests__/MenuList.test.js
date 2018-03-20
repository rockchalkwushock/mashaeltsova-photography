import React from 'react'

import { renderWithTheme } from '../../../../helpers'
import { MenuList } from '../index'

describe('Styled Component: <MenuList />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(<MenuList />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('display', 'grid')
    expect(wrapper).toHaveStyleRule('grid-gap', '10px')
    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(1fr)')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('margin-top', '10px')
    expect(wrapper).toHaveStyleRule('text-align', 'center')
  })
})
