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
        grid-template-columns: repeat(12, 1fr);
      }
      .gallery {
        background-color: ${styles.colors.lemon};
        display: grid;
        grid-column: span 12;
        grid-template-columns: repeat(
          8,
          1fr
        ); /* FIXME this needs to be dynamic to 'ids.length' */
        min-height: 100vh;
        text-align: center;
      }
    `}</style>
  </div>
)

Container.propTypes = {
  className: PropTypes.string.isRequired
}

export default Container
