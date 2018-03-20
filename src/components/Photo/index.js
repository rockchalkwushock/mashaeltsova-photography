import React from 'react'

import { Photo } from './elements'

const AppPhoto = ({ alt, photo, title }) => (
  <Photo alt={alt} sizes={photo.sizes} title={title} />
)

export default AppPhoto
