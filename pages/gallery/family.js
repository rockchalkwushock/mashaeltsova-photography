import Head from 'next/head'
import PropTypes from 'prop-types'

import { messages, PageWithoutData } from '../../lib'
import { Footer, Gallery, Layout } from '../../components'

/**
 * FIXME
 *
 * Create a messages[xyz] for the correct title/content/description.
 *
 * REVIEW
 *
 * this.props.messages will hold the messages; however,
 * this is in production ONLY. In development the object
 * is empty.
 *
 * QUESTION:
 *
 * 1) Can I re-write some code to supply the messages in
 * development as well? This would make importing the messages
 * object from '/lib' unnecessary.
 *
 * 2) Can I write some kind of 'if' block to use this.props.messages
 * if the above is not possible?
 */
const FamilyGallery = ({ ids, intl, url }) => (
  <Layout pathname={url.pathname}>
    <Head key={0}>
      <title>{intl.formatMessage(messages.title)}</title>
      <meta description={intl.formatMessage(messages.description)} />
    </Head>
    <Gallery key={1} ids={ids} pathname={url.pathname} />
    <Footer key={2} intl={intl} />
  </Layout>
)

FamilyGallery.propTypes = {
  ids: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default PageWithoutData(FamilyGallery)
