import React from 'react'
import Img from 'gatsby-image'

export const GalleryTemplate = ({ pathContext }) => (
  <div>
    <div>
      {pathContext.photos.map(({ node: photo }) => (
        <Img key={photo.id} resolutions={photo.resolutions} />
      ))}
    </div>
  </div>
)

export default GalleryTemplate
