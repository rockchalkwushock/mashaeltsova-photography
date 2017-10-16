import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { messages, Page } from '../lib'

export class IndexPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    locale: PropTypes.string
  }
  render() {
    const { intl } = this.props
    return <h1>{intl.formatMessage(messages.greeting)}</h1>
  }
}

export default Page(IndexPage)
