import { Image, Transformation } from 'cloudinary-react'
import PropTypes from 'prop-types'

const Photo = ({ publicId }) => (
  <Image publicId={publicId} secure use_root_path>
    <Transformation
      crop="scale"
      dpr="auto"
      fetch_format="auto"
      quality="auto:best"
      width="1024"
    />
  </Image>
)

Photo.propTypes = {
  publicId: PropTypes.string.isRequired
}

export default Photo
