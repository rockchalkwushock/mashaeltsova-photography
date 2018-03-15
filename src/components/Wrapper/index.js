import { FlexContainer } from '../commons'

const Wrapper = FlexContainer.extend`
  background-color: ${({ theme }) => theme.bg};
  min-height: 100vh;
  max-width: 100vw;
`

Wrapper.displayName = 'Wrapper'

export default Wrapper
