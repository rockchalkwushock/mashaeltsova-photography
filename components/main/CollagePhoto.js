const CollagePhoto = () => (
  <picture>
    <source
      media="(min-width: 1024px)"
      srcSet="https://res.cloudinary.com/mashaeltsovaphotography/c_fill,dpr_1.0,f_webp,fl_awebp,q_auto:best,r_15,w_300/c_fill,dpr_1.0,f_webp,h_200,l_model_headshot_laying_down,r_15,w_300,x_150,y_150/c_fill,dpr_1.0,h_200,r_15,u_ireland_oceanside,w_300,x_250,y_-75/c_fill,dpr_1.0,h_200,l_mother_son_black_white,r_15,w_300,x_325,y_75/c_fill,dpr_1.0,f_auto,h_200,r_15,u_bride_groom_outside,w_300,x_410,y_-75/young_girl_posing.jpg"
    />
    <source
      media="(min-width: 768px)"
      srcSet="https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,q_auto:best,r_15,w_150/c_scale,dpr_auto,f_auto,h_100,l_model_headshot_laying_down,r_15,w_150,x_80,y_75/c_scale,dpr_auto,f_auto,h_100,r_15,u_ireland_oceanside,w_150,x_160,y_-37/c_scale,dpr_auto,f_auto,h_100,l_mother_son_black_white,r_15,w_150,x_200,y_38/c_scale,h_100,r_15,u_bride_groom_outside,w_150,x_250,y_-37/young_girl_posing.jpg"
    />
    <source
      media="(min-width: 540px)"
      srcSet="https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,q_auto:best,w_200/c_scale,dpr_auto,f_auto,h_133,l_model_headshot_laying_down,w_200,x_200/c_scale,dpr_auto,f_auto,h_133,l_ireland_oceanside,w_200,x_100,y_133/c_scale,dpr_auto,f_auto,h_133,l_mother_son_black_white,w_200,x_-100,y_66/young_girl_posing.jpg"
    />
    <source
      media="(min-width: 425px)"
      srcSet="https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,q_auto:best,w_150/c_scale,dpr_auto,f_auto,h_100,l_model_headshot_laying_down,w_150,x_150/c_scale,dpr_auto,f_auto,h_100,l_ireland_oceanside,w_150,x_75,y_100/c_scale,dpr_auto,f_auto,h_100,l_mother_son_black_white,w_150,x_-75,y_50/young_girl_posing.jpg"
    />
    <img
      src="https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,q_auto:best,w_125/c_scale,dpr_auto,f_auto,h_83,l_model_headshot_laying_down,w_125,x_125/c_scale,dpr_auto,f_auto,h_83,l_ireland_oceanside,w_125,x_62,y_83/c_scale,dpr_auto,f_auto,h_83,l_mother_son_black_white,w_125,x_-63,y_41/young_girl_posing.jpg"
      alt="collage"
    />
    <style jsx>{`
      picture {
        display: flex;
        position: relative;
      }
      picture img {
        align-self: center;
      }
    `}</style>
  </picture>
)

export default CollagePhoto