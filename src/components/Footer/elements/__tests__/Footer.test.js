import React from 'react'

import { renderWithTheme } from '../../../../helpers'
import Footer from '../Footer'

describe('Styled Component: <Footer />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(<Footer />)
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should have styles', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#333')
    expect(wrapper).toHaveStyleRule('display', 'flex')
    expect(wrapper).toHaveStyleRule('flex-direction', 'column')
    expect(wrapper).toHaveStyleRule('justify-content', 'center')
    expect(wrapper).toHaveStyleRule('padding-top', '2em')
    expect(wrapper).toHaveStyleRule('text-align', 'center')
    expect(wrapper).toHaveStyleRule('width', '100vw')
    expect(wrapper).toHaveStyleRule('align-items', 'center', {
      media: '(min-width:736px)'
    })
    expect(wrapper).toHaveStyleRule('flex-direction', 'row', {
      media: '(min-width:736px)'
    })
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between', {
      media: '(min-width:736px)'
    })
    expect(wrapper).toHaveStyleRule('padding', '2em 1em 1em 1em', {
      media: '(min-width:736px)'
    })
  })
})
