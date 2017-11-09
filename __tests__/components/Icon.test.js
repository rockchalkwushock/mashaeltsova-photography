import React from 'react'
import { render } from 'enzyme'

import Icon from '../../components/commons/Icon'

describe('Component: Icon', () => {
  test('Renders without exploding as copyright icon', () => {
    const tree = render(
      <Icon icon="copyright" size="lg" url="https://rcws-development.com" />
    )
    expect(tree).toMatchSnapshot()
  })
  test('Renders without exploding as social icon', () => {
    const tree = render(
      <Icon icon="instagram" size="2x" url="https://instagram.com" />
    )
    expect(tree).toMatchSnapshot()
  })
})
