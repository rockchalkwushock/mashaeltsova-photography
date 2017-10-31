import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

import { createUrl } from '../../lib'

const Logo = ({ alt, publicId }) => (
  <picture>
    <source
      media="(min-width: 1024px)"
      srcSet={createUrl(true, publicId, 1024)}
    />
    <source
      media="(min-width: 768px)"
      srcSet={createUrl(true, publicId, 768)}
    />
    <source
      media="(min-width: 540px)"
      srcSet={createUrl(true, publicId, 540)}
    />
    <source
      media="(min-width: 425px)"
      srcSet={createUrl(true, publicId, 425)}
    />
    <img src={createUrl(true, publicId, 320)} alt={alt} />
  </picture>
)

const Image = ({ publicId }) => (
  <LazyLoad height={100} offset={100} once>
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={createUrl(false, publicId, 320)}
      />
      <source
        media="(min-width: 768px)"
        srcSet={createUrl(false, publicId, 360)}
      />
      <source
        media="(min-width: 540px)"
        srcSet={createUrl(false, publicId, 475)}
      />
      <source
        media="(min-width: 425px)"
        srcSet={createUrl(false, publicId, 375)}
      />
      <img src={createUrl(false, publicId, 300)} />
      <style jsx>{`
        picture {
          border: 2px solid lime;
        }
        img {
          border: 2px solid blue;
        }
      `}</style>
    </picture>
  </LazyLoad>
)

const Photo = props => (props.logo ? <Logo {...props} /> : <Image {...props} />)

Image.propTypes = {
  publicId: PropTypes.string.isRequired
}

Logo.propTypes = {
  alt: PropTypes.string,
  publicId: PropTypes.string.isRequired
}

Photo.propTypes = {
  alt: PropTypes.string,
  logo: PropTypes.bool,
  publicId: PropTypes.string.isRequired
}

export default Photo
