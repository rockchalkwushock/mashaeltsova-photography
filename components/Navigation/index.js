/**
 * REVIEW
 * FIXME
 * I will need to pass props on this like `intl`
 */
import { scaleDown as BurgerMenu } from 'react-burger-menu'

const Navigation = ({ inner, outer }) => (
  <BurgerMenu pageWrapId={inner} outerContainerId={outer}>
    <a href="/">Home</a>
    <a href="/gallery">Gallery</a>
  </BurgerMenu>
)

export default Navigation
