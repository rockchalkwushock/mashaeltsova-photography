import Link from 'next/link'

import { styles } from '../../lib'

export const GalleryLink = () => (
  <a className="gallery-btn">
    Visit Gallery
    <style jsx>{`
      .gallery-btn {
        align-self: center;
        background-color: ${styles.colors.peach};
        border: 0;
        box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
        color: rgba(223, 116, 74, 0.9);
        font-family: ${styles.fonts.courgette};
        height: 2em;
        letter-spacing: 0.25em;
        outline: 0;
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
  </a>
)

const GalleryButton = () => (
  <Link prefetch href="/gallery">
    <GalleryLink />
  </Link>
)

export default GalleryButton
