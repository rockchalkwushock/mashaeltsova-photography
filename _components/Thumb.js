import { createThumbnail, styles } from '../lib'

const Thumb = ({ onClick, publicId, view }) => (
  <picture>
    <img
      alt={publicId}
      onClick={onClick}
      src={createThumbnail(view, publicId)}
    />
    <style jsx>{`
      picture img {
        -webkit-box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
        box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
        border-radius: 15px;
      }
      picture img:hover {
        border: 2px solid ${styles.colors.warm};
      }
    `}</style>
  </picture>
)

export default Thumb
