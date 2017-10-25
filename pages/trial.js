import { Image, Transformation } from 'cloudinary-react'

// import { PageWithoutData } from '../lib'

// https://res.cloudinary.com/rockchalkwushock/c_scale,dpr_2.0,f_auto,q_auto:best,w_414/e_overlay,fl_tiled,l_logo_as_watermark,o_40,w_150/mother_daughter_black_white

const TrialPage = () => (
  <Image
    cloudName="rockchalkwushock"
    publicId="girl_in_red_dress"
    responsive
    secure
    use_root_path
  >
    <Transformation
      crop="scale"
      dpr="auto"
      fetch_format="auto"
      quality="auto:best"
      width="auto"
    />
  </Image>
)

export default TrialPage

// http://res.cloudinary.com/rockchalkwushock/image/upload/ar_4:6,c_fill,g_auto/c_scale,f_auto,q_auto,w_auto/mep_svg_logo
// <Image publicId="ar_4:6,c_fill,g_auto/c_scale,f_auto,q_auto,w_auto/mep_svg_logo" />
/**
 * NOTE
 *
 * secure prop = https
 * dpr = device-pixel-ratio
 * use_root_path = strips the `/image/upload/` from the url: https://res.cloudinary.com/rockchalkwushock/c_fit,dpr_auto,f_auto,w_320/mep_jpg_logo.jpg
 * url_suffix="basketball-game-in-college" NOTE: private CDN ONLY!!!
 *
 * NOTE q_auto defaults to q_auto:good I will want to use q_auto:best for the majority of the images.
 * less aggressive algorithm that will compress the file size up until file degradation begins
 *
 * REVIEW I can change the CNAME but likely need a paid account.
 * The url would change from:
 * https://res.cloudinary.com/rockchalkwushock/c_fit,dpr_auto,f_auto,w_320/mep_jpg_logo.jpg
 * to
 * https://mashaeltsovaphotography.com/imgTitle.jpg
 *
 * Responsive Images should be as easy as:
 * `<Transformation dpr='auto' width='auto' crop='scale' />`
 *
 * REVIEW
 * To optimize the images
 * `<Transformation quality='auto' fetch_format='auto' />`
 * Cloudinary will figure out what is the best quality to send and format.
 * This will reduce the cost of the hi-res photo.
 *
 * NOTE https://webspeedtest.cloudinary.com/
 * Use that to test the website when I am ready to go into production to verify
 * any images that can be further optimized.
 *
 * BUG ==> Cloudinary does not support transformations on .ai or .svg FML!!!
 * when using `<Transformation crop='scale' />` you must provide either width or height
 * cannot just use `aspect_ratio`
 *
 *
 * QUESTION
 * Integration with the following:
 * https://github.com/stratiformltd/react-loadable-visibility
 * https://github.com/thejameskyle/react-loadable
 *
 * REVIEW
 *
 * Possibly better to generate a "transformed" sprite sheet?
 * One request to Cloudinary for Sprite & matching CSS (2 pieces of data, 1 request)
 * Then I would have to figure out how to pull the images from the sprite and display them.
 */
