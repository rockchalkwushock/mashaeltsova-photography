import React from 'react'
import { render } from 'enzyme'

import Section from '../../components/main/Section'

describe('Component: Section', () => {
  test('Renders without exploding as .about', () => {
    const tree = render(<Section className="about" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .services', () => {
    const tree = render(<Section className="services" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .gallery', () => {
    const tree = render(<Section className="gallery" />)
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as .booking', () => {
    const tree = render(<Section className="booking" />)
    expect(tree).toMatchSnapshot()
  })
})
