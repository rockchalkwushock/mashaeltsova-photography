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
  <header className={`header ${className}`}>
    {children}
    <style jsx>{`
      header {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: ${styles.colors.peach};
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 1em;
        text-align: center;
      }
      .index {
        height: 95vh;
      }
      .gallery {
        height: 25vh;
      }
      @media (orientation: landscape) {
        .gallery {
          height: 50vh;
        }
      }
    `}</style>
  </header>
)

Header.propTypes = {
  className: PropTypes.string.isRequired
}

export default Header
