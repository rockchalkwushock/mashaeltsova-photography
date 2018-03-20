import styled from 'styled-components'

const MenuList = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1fr);
  justify-content: center;
  margin-top: 10px;
  text-align: center;
`

MenuList.displayName = 'MenuList'

export default MenuList
