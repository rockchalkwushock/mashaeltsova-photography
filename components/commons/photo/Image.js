import PropTypes from 'prop-types'

import { createUrl } from '../../../lib'

const Image = ({ onDismiss, publicId }) => (
  <picture onClick={onDismiss}>
    <source
      media="(min-width: 1024px)"
      srcSet={createUrl(false, publicId, 900)}
    />
    <source
      media="(min-width: 768px)"
      srcSet={createUrl(false, publicId, 650)}
    />
    <source
      media="(min-width: 600px) and (orientation: landscape)"
      srcSet={createUrl(false, publicId, 575)}
    />
    <source
      media="(min-width: 540px)"
      srcSet={createUrl(false, publicId, 475)}
    />
    <source
      media="(min-width: 400px)"
      srcSet={createUrl(false, publicId, 375)}
    />
    <img alt={publicId} src={createUrl(false, publicId, 300)} />
    <style jsx>{`
      img {
        -webkit-box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
        box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
        border-radius: 15px;
      }
    `}</style>
  </picture>
)

Image.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  publicId: PropTypes.string.isRequired
}

export default Image
