import { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { messages, WithIntl } from '../lib'
import { BookingForm, Footer, Layout, Section } from '../components'

/**
 * TODO
 * 1) Fix Sidebar Navigation issue.
 * 2) Add/Update translations
 * 3) react-waypoint (?)
 * 4) lazy load images, Sprite (?)
 * 5) Cleanup Styling
 * 6) Test mobile responsiveness in Chrome, Firefox, Opera, Safari in production.
 * 7) CSS Grid fallbacks
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
    const { intl, url } = this.props
    const { message, list } = this.manipulateText()
    return (
      <Layout pathname={url.pathname}>
        <Head>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta description={intl.formatMessage(messages.description)} />
        </Head>
        <Section header>
          <h1 style={{ textAlign: 'center' }}>Hello World</h1>
        </Section>
        <Section about>{intl.formatMessage(messages.aboutMessage)}</Section>
        <Section services>
          <p>{message}:</p>
          <ul>{list}</ul>
        </Section>
        <Section gallery>Gallery</Section>
        <Section booking>
          <BookingForm />
        </Section>
        <Footer intl={intl} />
      </Layout>
    )
  }
}

export default WithIntl(IndexPage)
