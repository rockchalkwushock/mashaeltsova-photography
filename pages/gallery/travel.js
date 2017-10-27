import Head from 'next/head'
import PropTypes from 'prop-types'

import { messages, WithCloudinary, WithIntl } from '../../lib'
import { Footer, Gallery, Layout } from '../../components'

const TravelGallery = ({ ids, intl, url }) => (
  <Layout pathname={url.pathname}>
    <Head key={0}>
      <title>{intl.formatMessage(messages.title)}</title>
      <meta description={intl.formatMessage(messages.description)} />
    </Head>
    <Gallery key={1} ids={ids} pathname={url.pathname} />
    <Footer key={2} intl={intl} />
  </Layout>
)

TravelGallery.propTypes = {
  ids: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default WithIntl(WithCloudinary(TravelGallery))
