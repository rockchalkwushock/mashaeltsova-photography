import PropTypes from 'prop-types'

import Image from './Image'
import Logo from './Logo'

const Photo = props => (props.logo ? <Logo {...props} /> : <Image {...props} />)

Photo.propTypes = {
  logo: PropTypes.bool,
  onDismiss: PropTypes.func,
  publicId: PropTypes.string.isRequired
}

export default Photo
