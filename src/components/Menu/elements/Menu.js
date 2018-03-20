import styled from 'styled-components'

const Menu = styled.nav`
  background-color: #333;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.3);
  height: ${({ state }) => (state ? '160px' : '60px')};
  transition: height 0.3s ease-in-out 0.05s;
  width: 100vw;
`

Menu.displayName = 'Menu'

export default Menu
