import React, { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { messages, Page } from '../lib'
import { Footer, Main, Navigation, Section } from '../components'

/**
 * Will likely contain `state` so keep this as a class component.
 */

export class IndexPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    locale: PropTypes.string
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
        <Section about>About</Section>
        <Section services>Services</Section>
        <Section gallery>Gallery</Section>
        <Section booking>Booking</Section>
        <Footer>Footer</Footer>
      </Main>
    )
  }
}

export default Page(IndexPage)
