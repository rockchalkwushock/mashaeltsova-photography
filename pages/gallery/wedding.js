import PropTypes from 'prop-types'

import { PageWithoutData } from '../../lib'
import { Gallery } from '../../components'

const WeddingGallery = ({ ids }) => <Gallery ids={ids} />

WeddingGallery.propTypes = {
  ids: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default PageWithoutData(WeddingGallery)
