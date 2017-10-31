import PropTypes from 'prop-types'

const Placeholder = ({ publicId }) => (
  <img
    src={`https://res.cloudinary.com/mashaeltsovaphotography/c_scale,e_blur:1000,f_auto,w_300/${publicId}.jpg`}
  />
)

Placeholder.propTypes = {
  publicId: PropTypes.string.isRequired
}

export default Placeholder
