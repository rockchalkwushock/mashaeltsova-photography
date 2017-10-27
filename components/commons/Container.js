import PropTypes from 'prop-types'

import { styles } from '../../lib'

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
        grid-template-columns: repeat(8, 1fr);
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
