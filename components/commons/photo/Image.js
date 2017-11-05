import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

import Placeholder from './Placeholder'
import { createUrl } from '../../../lib'

const Image = ({ onDismiss, publicId }) => (
  <LazyLoad height={400} offset={-200} once placeholder={<Placeholder />}>
    <picture onClick={onDismiss}>
      <source
        media="(min-width: 1024px)"
        srcSet={createUrl(false, publicId, 320)}
      />
      <source
        media="(min-width: 768px)"
        srcSet={createUrl(false, publicId, 360)}
      />
      <source
        media="(min-width: 600px) and (orientation: landscape)"
        srcSet={createUrl(false, publicId, 275)}
      />
      <source
        media="(min-width: 540px)"
        srcSet={createUrl(false, publicId, 475)}
      />
      <source
        media="(min-width: 425px)"
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
  </LazyLoad>
)

Image.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  publicId: PropTypes.string.isRequired
}

export default Image
