import React from 'react'
import { shallow } from 'enzyme'

import Link, { ExternalLink } from '../Link'
import { renderWithTheme } from '../../../helpers'

describe('Component: <Link />', () => {
  let wrapper
  let wrapper2
  beforeAll(() => {
    wrapper = shallow(
      <Link href="/" label="home page">
        Home
      </Link>
    )
    wrapper2 = shallow(
      <Link ext href="https://cnn.com" label="cnn" text="CNN" />
    )
  })
  test('should render markup as InternalLink', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should render markup as ExternalLink', () => {
    expect(wrapper2).toMatchSnapshot()
  })
  test('should have props as InternalLink', () => {
    expect(wrapper.props()).toHaveProperty('to', '/')
    expect(wrapper.props()).toHaveProperty('aria-label', 'home page')
    expect(wrapper.props()).toHaveProperty('children', 'Home')
  })
  test('should have props as ExternalLink', () => {
    expect(wrapper2.props()).toHaveProperty('href', 'https://cnn.com')
    expect(wrapper2.props()).toHaveProperty('aria-label', 'cnn')
    expect(wrapper2.props()).toHaveProperty('children', 'CNN')
  })
})

describe('Styled Component: <ExternalLink />', () => {
  let wrapper
  beforeAll(() => {
    wrapper = renderWithTheme(
      <ExternalLink href="https://cnn.com" aria-label="hello">
        CNN
      </ExternalLink>
    )
  })
  test('should render markup', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

// REVIEW
// TypeError: Cannot read property 'history' of undefined
// describe('Styled Component: <InternalLink />', () => {
//   let wrapper
//   beforeAll(() => {
//     wrapper = renderWithTheme(
//       <InternalLink to="/" aria-label="hello">
//         Home
//       </InternalLink>
//     )
//   })
//   test('should render markup', () => {
//     expect(wrapper).toMatchSnapshot()
//   })
// })
