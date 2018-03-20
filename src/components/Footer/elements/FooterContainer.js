import styled from 'styled-components'

const FooterContainer = styled.div`
  text-align: center;
  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    text-align: ${({ left }) => (left ? 'left' : 'right')};
  }
`

FooterContainer.displayName = 'FooterContainer'

export default FooterContainer
