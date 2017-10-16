import React, { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { messages, Page } from '../lib'
import {
  AboutSection,
  ContactSection,
  GallerySection,
  LandingSection,
  Layout
} from '../components'

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
      <Layout>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta description={intl.formatMessage(messages.description)} />
        </Head>
        <LandingSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </Layout>
    )
  }
}

export default Page(IndexPage)
