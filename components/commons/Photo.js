import LazyLoad from 'react-lazyload'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import { createUrl } from '../../lib'

const Placeholder = () => (
  <div className="placeholder">
    <FontAwesome name="spinner" size="4x" pulse />
    <style jsx>{`
      div.placeholder {
        align-items: center;
        display: flex;
        height: 300px;
        justify-content: center;
        width: 300px;
      }
    `}</style>
  </div>
)

const Logo = ({ alt, publicId }) => (
  <picture>
    <source
      media="(min-width: 1024px)"
      srcSet={createUrl(true, publicId, 525)}
    />
    <source
      media="(min-width: 768px)"
      srcSet={createUrl(true, publicId, 400)}
    />
    <source
      media="(min-width: 540px) and (orientation: landscape)"
      srcSet={createUrl(true, publicId, 300)}
    />
    <source
      media="(min-width: 540px)"
      srcSet={createUrl(true, publicId, 440)}
    />
    <source
      media="(min-width: 425px)"
      srcSet={createUrl(true, publicId, 375)}
    />
    <img src={createUrl(true, publicId, 320)} alt={alt} />
  </picture>
)

const Image = ({ publicId }) => (
  <LazyLoad height={400} offset={-200} once placeholder={<Placeholder />}>
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
      <img src={createUrl(false, publicId, 300)} />
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
