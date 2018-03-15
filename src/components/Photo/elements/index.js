import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const UnstyledPhoto = props => <Img {...props} />

const StyledPhoto = styled(UnstyledPhoto)`
  border: none;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 1);
`

StyledPhoto.displayName = 'StyledPhoto'

export default StyledPhoto
