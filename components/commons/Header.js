import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * TODO FIXME
 *
 * Will want to render a different view for header when at
 * `/gallery` vs `/` because the gallery will already be heavy
 * with all the images being loaded.
 *
 * Pass `pathname` on the header and then run and if/else.
 * Possibly render a banner with the logo in one corner and
 * 'Masha Eltsova Photography' spanning the rest in Courgette or Nunito.
 */

const Header = ({ children, className }) => (
  <header className={className}>
    {children}
    <style jsx>{`
      header {
        align-items: center;
        background-color: ${styles.colors.peach};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
        text-align: center;
      }
      .index {
        height: 100vh;
      }
      .gallery {
        height: 25vh;
      }
    `}</style>
  </header>
)

Header.propTypes = {
  className: PropTypes.string.isRequired
}

export default Header
