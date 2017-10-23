import PropTypes from 'prop-types'

import { PageWithoutData } from '../../lib'
import { Gallery } from '../../components'

/**
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
const FamilyGallery = ({ ids }) => <Gallery ids={ids} />

FamilyGallery.propTypes = {
  ids: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default PageWithoutData(FamilyGallery)
