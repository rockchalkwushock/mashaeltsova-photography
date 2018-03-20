import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const UnstyledPhoto = props => <Img {...props} />

const Photo = styled(UnstyledPhoto)`
  border: none;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 1);
  height: 240px;
  width: 240px;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    width: 400px;
  }
  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    width: 300px;
  }
`
Photo.displayName = 'Photo'

export default Photo
