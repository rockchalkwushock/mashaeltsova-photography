import LazyLoad from 'react-lazyload'

import { fadeIn } from '../../lib'

const CollagePhoto = () => (
  <LazyLoad height={200} offset={100} once>
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={`https://res.cloudinary.com/${process.env
          .CLOUD_NAME}/b_rgb:fedcd2,c_scale,f_auto,h_200,q_auto:best,r_15,w_300/c_scale,h_200,l_model_headshot_laying_down,r_15,w_300,x_150,y_150/c_scale,h_200,r_15,u_ireland_oceanside,w_300,x_250,y_-75/c_scale,h_200,l_mother_son_black_white,r_15,w_300,x_325,y_75/c_scale,h_200,r_15,u_bride_groom_outside,w_300,x_410,y_-75/young_girl_posing.jpg`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`https://res.cloudinary.com/${process.env
          .CLOUD_NAME}/b_rgb:fedcd2,c_scale,f_auto,h_120,q_auto:best,r_15,w_180/c_scale,h_120,l_model_headshot_laying_down,r_15,w_180,x_100,y_100/c_scale,h_120,r_15,u_ireland_oceanside,w_180,x_160,y_-50/c_scale,h_120,l_mother_son_black_white,r_15,w_180,x_205,y_50/c_scale,h_120,r_15,u_bride_groom_outside,w_180,x_265,y_-50/young_girl_posing.jpg`}
      />
      <source
        media="(min-width: 540px)"
        srcSet={`https://res.cloudinary.com/${process.env
          .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_200/c_scale,h_133,l_model_headshot_laying_down,w_200,x_200/c_scale,h_133,l_ireland_oceanside,w_200,x_100,y_133/c_scale,h_133,l_mother_son_black_white,w_200,x_-100,y_66/young_girl_posing.jpg`}
      />
      <source
        media="(min-width: 425px)"
        srcSet={`https://res.cloudinary.com/${process.env
          .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_150/c_scale,h_100,l_model_headshot_laying_down,w_150,x_150/c_scale,h_100,l_ireland_oceanside,w_150,x_75,y_100/c_scale,h_100,l_mother_son_black_white,w_150,x_-75,y_50/young_girl_posing.jpg`}
      />
      <img
        alt="collage"
        className="fadeIn"
        src={`https://res.cloudinary.com/${process.env
          .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_125/c_scale,h_83,l_model_headshot_laying_down,w_125,x_125/c_scale,h_83,l_ireland_oceanside,w_125,x_62,y_83/c_scale,h_83,l_mother_son_black_white,w_125,x_-63,y_41/young_girl_posing.jpg`}
      />
      <style jsx>{fadeIn}</style>
      <style jsx>{`
        picture {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          position: relative;
        }
        picture img {
          -ms-flex-item-align: center;
          align-self: center;
          background-color: transparent;
        }
        @media (max-width: 767px) {
          picture img {
            -webkit-box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
            box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
            border-radius: 15px;
          }
        }
      `}</style>
    </picture>
  </LazyLoad>
)

export default CollagePhoto
