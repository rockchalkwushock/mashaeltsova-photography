import { Component } from 'react'
import PropTypes from 'prop-types'
import { Page } from '../lib'
import { FormContainer } from '../containers'

/**
 * This passing of `intl` works for getting <Form /> the `intl` obj.
 */

class TestPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired
  }
  render() {
    return <FormContainer intl={this.props.intl} />
  }
}

export default Page(TestPage)
