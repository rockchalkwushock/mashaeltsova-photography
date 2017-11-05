import PropTypes from 'prop-types'

import { createUrl } from '../../../lib'

const Logo = ({ publicId }) => (
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
    <img
      src={createUrl(true, publicId, 320)}
      alt="Masha Eltsova Photography Logo"
    />
  </picture>
)

Logo.propTypes = {
  publicId: PropTypes.string.isRequired
}

export default Logo
