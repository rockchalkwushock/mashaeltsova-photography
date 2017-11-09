import PropTypes from 'prop-types'

import { createUrl, fadeIn } from '../../../lib'

const Logo = ({ publicId }) => (
  <picture>
    <source
      media="(min-width: 768px)"
      srcSet={createUrl(true, publicId, 575)}
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
      alt="Masha Eltsova Photography Logo"
      className="fadeIn"
      src={createUrl(true, publicId, 320)}
    />
    <style jsx>{fadeIn}</style>
  </picture>
)

Logo.propTypes = {
  publicId: PropTypes.string.isRequired
}

export default Logo
