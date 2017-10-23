import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * NOTE
 *
 * `prefetch` will grab all the JS from the file
 * the route is pointing to in advance. This will
 * make the route change look "almost" instantaneous.
 */

import { styles } from '../../lib'

const CustomLink = ({ className, text, url }) => (
  <li>
    <Link prefetch href={url}>
      <a className={className}>{text}</a>
    </Link>
    <style jsx>{`
      .sideNav {
        color: ${styles.colors.peach};
        font-size: 1.2em;
        padding-bottom: 0.5em;
      }
      .sideNav:hover {
        font-size: 1.5em;
      }
      .galleryNav {
        color: ${styles.colors.warm};
        flex: 1 1 auto;
      }
      .galleryNav:hover {
        background-color: ${styles.colors.warm};
        color: ${styles.colors.peach};
        font-family: ${styles.fonts.courgette};
      }
    `}</style>
  </li>
)

CustomLink.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default CustomLink
