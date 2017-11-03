import React from 'react'
import { render } from 'enzyme'

import SubNav from '../../components/commons/SubNav'
import A from '../../components/commons/A'

describe('Component: SubNav', () => {
  test('Renders without exploding', () => {
    const tree = render(
      <SubNav>
        <A onClick={() => {}} text="Link 1" />
        <A onClick={() => {}} text="Link 2" />
        <A onClick={() => {}} text="Link 3" />
      </SubNav>
    )
    expect(tree).toMatchSnapshot()
  })
})
