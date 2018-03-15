import { FlexContainer } from '../commons'

const Wrapper = FlexContainer.extend`
  background-color: ${({ theme }) => theme.bg};
  min-height: 100vh;
  max-width: 100vw;
  padding: 0 1em;
  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    padding: 0 4em;
  }
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
