import React from 'react'

import StyledPhoto from './elements'

const Photo = ({ alt, photo, title }) => (
  <StyledPhoto alt={alt} sizes={photo.sizes} title={title} />
)

export default Photo
