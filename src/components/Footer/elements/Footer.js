import styled from 'styled-components'

const Footer = styled.footer`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2em;
  text-align: center;
  width: 100vw;
  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em 1em 1em 1em;
  }
`

Footer.displayName = 'Footer'

export default Footer
