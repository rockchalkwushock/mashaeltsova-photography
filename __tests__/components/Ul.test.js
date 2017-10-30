import React from 'react'
import { render } from 'enzyme'

import Ul from '../../components/commons/Ul'
import Li from '../../components/commons/Li'

describe('Component: Ul', () => {
  test('Renders without exploding', () => {
    const tree = render(
      <Ul>
        <Li text="Hello World!" />
        <Li text="What is crackalacking?" />
        <Li text="Boooooooooooo!" />
      </Ul>
    )
    expect(tree).toMatchSnapshot()
  })
})
