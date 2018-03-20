import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

// Need to do this for testing purposes.
const UnstyledLink = props => <Link {...props} />

export const ExternalLink = styled.a``

export const InternalLink = styled(UnstyledLink)``

ExternalLink.displayName = 'ExternalLink'
InternalLink.displayName = 'InternalLink'

const SiteLink = ({ children, ext, href, label, text }) =>
  ext ? (
    <ExternalLink href={href} aria-label={label}>
      {children || text}
    </ExternalLink>
  ) : (
    <InternalLink to={href} aria-label={label}>
      {children || text}
    </InternalLink>
  )

export default SiteLink
