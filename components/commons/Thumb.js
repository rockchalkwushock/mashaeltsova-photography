import PropTypes from 'prop-types'

import { createThumbnail, fadeIn } from '../../lib'

const Thumb = ({ onClick, publicId, view }) => (
  <picture>
    <source
      media="(min-width: 768px)"
      srcSet={createThumbnail(view, publicId, 200, 200)}
    />
    <img
      alt={publicId}
      className="fadeIn"
      onClick={onClick}
      src={createThumbnail(view, publicId, 100, 100)}
    />
    <style jsx>{fadeIn}</style>
    <style jsx>{`
      picture img {
        -webkit-box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
        box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
        border-radius: 15px;
      }
    `}</style>
  </picture>
)

Thumb.propTypes = {
  onClick: PropTypes.func.isRequired,
  publicId: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired
}

export default Thumb
