import React from 'react'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faVk from '@fortawesome/fontawesome-free-brands/faVk'

fontawesome.library.add(faBars, faFacebook, faEnvelope, faInstagram, faVk)

const UnstyledIcon = props => {
  // Removes error: 'Received "menu": `true` for non-boolean from fontawesome
  const rest = { ...props, menu: null }
  return <FontAwesomeIcon {...rest} />
}

export const StyledIcon = styled(UnstyledIcon)`
  margin-left: ${({ menu }) => (menu ? '10px' : 'unset')}
  margin-top: ${({ menu }) => (menu ? '10px' : 'unset')}
`

const Icon = props => <StyledIcon {...props} />

export default Icon
