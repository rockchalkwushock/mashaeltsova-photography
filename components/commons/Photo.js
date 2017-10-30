const Photo = ({ alt, publicId }) => (
  <picture>
    <source
      media="(min-width: 1024px)"
      srcSet={`https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,o_90,q_auto:best,w_1024/${publicId}`}
    />
    <source
      media="(min-width: 768px)"
      srcSet={`https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,o_90,q_auto:best,w_768/${publicId}`}
    />
    <source
      media="(min-width: 540px)"
      srcSet={`https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,o_90,q_auto:best,w_540/${publicId}`}
    />
    <source
      media="(min-width: 425px)"
      srcSet={`https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,o_90,q_auto:best,w_425/${publicId}`}
    />
    <img
      src={`https://res.cloudinary.com/mashaeltsovaphotography/c_scale,dpr_auto,f_auto,o_90,q_auto:best,w_320/${publicId}`}
      alt={alt}
    />
  </picture>
)

export default Photo
