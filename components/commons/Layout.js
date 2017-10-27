import PropTypes from 'prop-types'

import BurgerMenu from './BurgerMenu'
import Main from './Main'
import Meta from './Meta'

const Layout = ({ children, pathname }) => (
  <div id="wrapper">
    <Meta />
    <BurgerMenu />
    <Main id="main" className={pathname === '/' ? 'mainGrid' : null}>
      {children}
    </Main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired
}

export default Layout
