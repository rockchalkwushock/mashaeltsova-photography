import { Image, Transformation } from 'cloudinary-react'
import PropTypes from 'prop-types'

/**
 * REVIEW
 *
 * family - 8
 * portrait - 10
 * travel - 10
 * wedding - 8
 *
 */

const Photo = ({ publicId }) => (
  <div>
    <Image publicId={publicId} secure use_root_path>
      <Transformation
        crop="scale"
        dpr="auto"
        fetch_format="auto"
        quality="auto:best"
        width="320"
      />
    </Image>
    <style jsx>{`
      div {
        grid-column: span 8;
      }
      @media (min-width: 768px) {
        div {
          grid-column: span 12;
        }
      }
      @media (min-width: 1024px) {
        div {
          grid-column: span 12;
        }
      }
    `}</style>
  </div>
)

Photo.propTypes = {
  publicId: PropTypes.string.isRequired
}

export default Photo
