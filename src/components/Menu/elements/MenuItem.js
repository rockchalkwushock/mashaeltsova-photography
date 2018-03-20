import styled from 'styled-components'

const MenuItem = styled.li`
  opacity: ${({ state }) => (state ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.3s ease-in-out 0.1s;
`

MenuItem.displayName = 'MenuItem'

export default MenuItem
