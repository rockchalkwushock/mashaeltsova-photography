import React from 'react'
import { render, shallow } from 'enzyme'
import { intl } from 'react-intl'

/**
 * QUESTION
 *
 * How to toggle the locale & messages with mock?
 */

import { IndexPage } from '../pages'

describe('IndexPage "en"', () => {
  test.skip('should yield English text.', () => {
    const wrapper = shallow(<IndexPage intl={intl} />)
    expect(wrapper.text()).toEqual('Hello World!')
  })

  test('Snapshot', () => {
    const tree = render(<IndexPage intl={intl} />)
    expect(tree).toMatchSnapshot()
  })
})

describe.skip('IndexPage "ru"', () => {
  test('should yield Russian text.', () => {
    const wrapper = shallow(<IndexPage intl={intl} />)
    expect(wrapper.text()).toEqual('Hello World!')
  })

  test('Snapshot', () => {
    const tree = render(<IndexPage intl={intl} />)
    expect(tree).toMatchSnapshot()
  })
})
