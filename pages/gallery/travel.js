import PropTypes from 'prop-types'

import { PageWithoutData } from '../../lib'
import { Gallery } from '../../components'

const TravelGallery = ({ ids }) => <Gallery ids={ids} />

TravelGallery.propTypes = {
  ids: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default PageWithoutData(TravelGallery)
