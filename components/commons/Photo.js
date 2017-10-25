import { Image, Transformation } from 'cloudinary-react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

/**
 * REVIEW
 *
 * family - 8
 * portrait - 10
 * travel - 10
 * wedding - 8
 *
 * https://res.cloudinary.com/demo/image/upload/l_cloudinary_icon,e_colorize,co_white,o_60/envelope.jpg
 * NOTE: With watermark overlay
 * https://res.cloudinary.com/rockchalkwushock/c_scale,dpr_auto,f_auto,q_auto:best,w_320/e_overlay,fl_tiled,l_logo_as_watermark,o_40,w_150/family_black_white
 *
 */
const Loader = () => (
  <div>
    ...Loading
    <style jsx>{`
      div {
        grid-column: span 8;
        height: 300px;
      }
    `}</style>
  </div>
)

const Photo = ({ publicId }) => (
  <div>
    <LazyLoad height={300} offset={-200} once placeholder={<Loader />}>
      <Image publicId={publicId} responsive secure use_root_path>
        <Transformation
          crop="scale"
          dpr="auto"
          fetch_format="auto"
          quality="auto:best"
          width="auto"
        />
        {/* FIXME Temporary */}
        <Transformation
          overlay="logo_as_watermark"
          opacity="40"
          width="150"
          effect="overlay"
          flags="tiled"
        />
      </Image>
    </LazyLoad>
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
