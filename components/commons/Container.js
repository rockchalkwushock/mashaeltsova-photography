import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * REVIEW
 * FIXME
 *
 * Possibly need to do away with the grid in WithLayout
 * for all gallery pages. I'm losing control of the images.
 * So possibly get rid of it here too.
 *
 */
const Container = ({ className, children }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      .galleryPage {
        background-color: ${styles.colors.powder};
        display: grid;
        grid-gap: 1em;
        grid-template-column: repeat(4, 1fr);
        text-align: center;
      }
      .galleryPages > * {
        color: ${styles.colors.warm};
        grid-column: span 4;
      }
      .gallery {
        background-color: ${styles.colors.lemon};
        height: 250px;
      }
    `}</style>
  </div>
)

Container.propTypes = {
  className: PropTypes.string.isRequired
}

export default Container
