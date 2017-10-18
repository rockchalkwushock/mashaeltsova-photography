import React, { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { messages, Page } from '../lib'
import { Footer, Main, Navigation, Section } from '../components'
import { FormContainer } from '../containers'

/**
 * Will likely contain `state` so keep this as a class component.
 */

export class IndexPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    locale: PropTypes.string
  }
  renderServicesSection = () => {
    // 1. Get locale specific message.
    const translatedText = this.props.intl.formatMessage(
      messages.servicesMessage
    )
    // 2. split() the string on the ':' & populate each segment in an array.
    const [message, services] = translatedText.split(': ')
    // 3. split() the substring on ',' & map over the array populating the `<li />` returning and array of those elements.
    const list = services
      .split(',')
      .map(service => <li key={Math.random()}>{service}</li>)
    // 4. Render it all!
    return (
      <Section services>
        <p>{message}:</p>
        <ul>{list}</ul>
      </Section>
    )
  }
  render() {
    const { intl } = this.props
    return (
      <Main>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta description={intl.formatMessage(messages.description)} />
        </Head>
        <Section header>
          <h2>Use Logo as Background Image</h2>
          <h4>or</h4>
          <h2>
            Use Logo as first entry in a 3-4 Image Slider with fade-in animation
          </h2>
        </Section>
        <Navigation>Navigation</Navigation>
        <Section about>{intl.formatMessage(messages.aboutMessage)}</Section>
        {this.renderServicesSection()}
        <Section gallery>Gallery</Section>
        <Section booking>
          <FormContainer intl={intl} />
        </Section>
        <Footer intl={intl} />
      </Main>
    )
  }
}

export default Page(IndexPage)
