import Link from 'next/link'
import PropTypes from 'prop-types'

import { styles } from '../../lib'

const GalleryButton = ({ text, url }) => (
  <Link prefetch href={url}>
    <button className="gallery-btn">
      {text}
      <style jsx>{`
        .gallery-btn {
          align-self: center;
          background-color: ${styles.colors.peach};
          border: 0;
          box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
          color: rgba(223, 116, 74, 0.9);
          cursor: pointer;
          font-family: ${styles.fonts.courgette};
          height: 2em;
          letter-spacing: 0.25em;
          outline: 0;
          padding: 0.5em;
          position: absolute;
        }
        .gallery-btn:focus,
        .gallery-btn:hover {
          align-self: center;
          background-color: ${styles.colors.peach};
          border: 0;
          color: ${styles.colors.warm};
          font-size: 1.4em;
          height: 2em;
          outline: 0;
          -webkit-transition: 0.2s ease;
          -moz-transition: 0.2s ease;
          transition: 0.2s ease;
        }
      `}</style>
    </button>
  </Link>
)

GalleryButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GalleryButton
