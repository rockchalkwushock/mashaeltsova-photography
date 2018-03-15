import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const UnstyledPhoto = props => <Img {...props} />

const StyledPhoto = styled(UnstyledPhoto)``

StyledPhoto.displayName = 'StyledPhoto'

export default StyledPhoto
