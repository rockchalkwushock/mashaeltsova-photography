/**
 * TODO: Add watermark!
 * TODO: Add lazy-loading!
 */

import PropTypes from 'prop-types'

import { createUrl } from '../../lib'

const Photo = ({ publicId }) => (
  <picture>
    <source
      media="(min-width: 600px)"
      srcSet={`${createUrl(600, publicId)}, ${createUrl(1200, publicId)}`}
    />
    <source
      media="(min-width: 800px)"
      srcSet={`${createUrl(800, publicId)}, ${createUrl(1600, publicId)}`}
    />
    <img
      src={`${createUrl(320, publicId, 'base')}`}
      alt={publicId}
      srcSet={`${createUrl(320, publicId)}, ${createUrl(425, publicId)}`}
    />
  </picture>
)

Photo.propTypes = {
  publicId: PropTypes.string.isRequired
}

export default Photo

//     <LazyLoad height={300} offset={-200} once placeholder={<Loader />}>
//       <Image publicId={publicId} responsive secure use_root_path>
//         <Transformation
//           crop="scale"
//           dpr="auto"
//           fetch_format="auto"
//           quality="auto:best"
//           width="auto"
//         />
//         {/* FIXME Temporary */}
//         <Transformation
//           overlay="logo_as_watermark"
//           opacity="40"
//           width="150"
//           effect="overlay"
//           flags="tiled"
//         />
//       </Image>
//     </LazyLoad>
