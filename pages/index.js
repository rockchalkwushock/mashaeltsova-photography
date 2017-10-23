import React, { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Image, Transformation } from 'cloudinary-react'

import { messages, PageWithData } from '../lib'
import { Footer, Section } from '../components'
import { FormContainer } from '../containers'

/**
 * Will likely contain `state` so keep this as a class component.
 * NOTE: Returning and Array from `render()` to preserve CSS-Grid.
 * NOTE: `Math.random()` === no bueno for `key`
 * QUESTION: Is `key={0}` "okay".
 * @see https://reactjs.org/docs/reconciliation.html#tradeoffs
 */

export class IndexPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired
  }
  manipulateText = () => {
    const translatedText = this.props.intl.formatMessage(
      messages.servicesMessage
    )
    const [message, services] = translatedText.split(': ')
    const list = services
      .split(',')
      .map(service => <li key={service}>{service}</li>)
    return { message, list }
  }
  render() {
    const { intl } = this.props
    const { message, list } = this.manipulateText()
    return [
      <Head key={0}>
        <title>{intl.formatMessage(messages.title)}</title>
        <meta description={intl.formatMessage(messages.description)} />
      </Head>,
      <Section header key={1}>
        <h1 style={{ textAlign: 'center' }}>Hello World</h1>
      </Section>,
      <Section about key={2}>
        {intl.formatMessage(messages.aboutMessage)}
      </Section>,
      <Section services key={3}>
        <p>{message}:</p>
        <ul>{list}</ul>
      </Section>,
      <Section gallery key={4}>
        Gallery
      </Section>,
      <Section booking key={5}>
        <FormContainer intl={intl} />
      </Section>,
      <Footer intl={intl} key={6} />
    ]
  }
}

export default PageWithData(IndexPage)
