// NOTE: Import like this to avoid bring Snap.svg into bundle!
import Menu from 'react-burger-menu/lib/menus/push'

import CustomLink from './CustomLink'

const BurgerMenu = () => (
  <Menu pageWrapId={'main'} outerContainerId={'wrapper'}>
    <ul className="linksWrapper">
      <CustomLink className="sideNav" text="Home" url="/" />
      <CustomLink className="sideNav" text="Gallery" url="/gallery" />
    </ul>
  </Menu>
)

export default BurgerMenu
