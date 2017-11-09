import Link from 'next/link'
import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * REVIEW
 * FIXME
 *
 * Temporary resolution for touch event vs :hover was to
 * only apply the :hover & :focus styles a > 1024px in the hope
 * the user is no longer on a touch enabled device.
 *
 */

const NavButton = ({ className, onClick, text }) => (
  <button className={className} name={text.toLowerCase()} onClick={onClick}>
    {text}
    <style jsx>{`
      button {
        background-color: transparent;
        -webkit-box-shadow: 4px 4px 4px rgba(54, 69, 79, 0.7);
        box-shadow: 4px 4px 4px rgba(54, 69, 79, 0.7);
        color: ${styles.colors.warm};
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        font-family: ${styles.fonts.courgette};
        -webkit-appearance: none;
        margin: 0.2em;
      }
      .galleryButton {
        background-color: ${styles.colors.peach};
      }
      @media (min-width: 1024px) {
        button:focus,
        button:hover {
          -webkit-appearance: none;
          background-color: ${styles.colors.warm};
          color: ${styles.colors.peach};
          font-size: 1.2em;
          font-weight: 900;
        }
      }
    `}</style>
  </button>
)

const NavLink = ({ className, text, url }) => (
  <Link prefetch href={url}>
    <a className={className}>
      {text}
      <style jsx>{`
        .linkToGallery {
          -ms-flex-item-align: center;
          align-self: center;
          background-color: ${styles.colors.peach};
          -webkit-box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
          box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
          color: rgba(223, 116, 74, 0.9);
          cursor: pointer;
          font-family: ${styles.fonts.courgette};
          letter-spacing: 0.25em;
          position: absolute;
        }
        .mobileNavLink {
          display: block;
          font-family: ${styles.fonts.courgette};
          font-size: 1.5em;
          -webkit-transition: 0.3s;
          -moz-transition: 0.3s;
          transition: 0.3s;
        }
        .mobileNavLink:hover {
          background-color: ${styles.colors.warm};
          color: ${styles.colors.peach};
        }
        @media (max-width: 480px) {
          .linkToGallery {
            font-size: 0.75em;
          }
        }
        @media (max-width: 320px) {
          .linkToGallery {
            font-size: 0.55em;
          }
        }
        @media (min-width: 1024px) {
          .linkToGallery:focus,
          .linkToGallery:hover {
            -ms-flex-item-align: center;
            align-self: center;
            background-color: ${styles.colors.peach};
            color: ${styles.colors.warm};
            font-size: 1.4em;
            padding: 0.5em;
            -webkit-transition: 0.2s ease;
            -moz-transition: 0.2s ease;
            transition: 0.2s ease;
          }
        }
      `}</style>
    </a>
  </Link>
)

const A = props => {
  if (!props.navigate) {
    return <NavButton {...props} />
  }
  return <NavLink {...props} />
}

A.propTypes = {
  className: PropTypes.string,
  navigate: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired, // Required for both children
  url: PropTypes.string
}

NavButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

NavLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default A
