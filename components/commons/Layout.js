// NOTE: Import like this to avoid bring Snap.svg into bundle!
import Menu from 'react-burger-menu/lib/menus/push'
import PropTypes from 'prop-types'

import CustomLink from './CustomLink'
import Main from './Main'
import Meta from './Meta'
import { styles } from '../../lib'

const Layout = ({ children, pathname }) => (
  <div id="wrapper">
    <Meta />
    <Menu pageWrapId={'main'} outerContainerId={'wrapper'}>
      <ul className="linksWrapper">
        <CustomLink className="sideNav" text="Home" url="/" />
        <li className="dropDown">
          <a className="thisIsBS">Gallery</a>
          <ul className="subLinksWrapper">
            <CustomLink
              className="sideNav"
              text="Family"
              url="/gallery/family"
            />
            <CustomLink
              className="sideNav"
              text="Portrait"
              url="/gallery/portrait"
            />
            <CustomLink
              className="sideNav"
              text="Travel"
              url="/gallery/travel"
            />
            <CustomLink
              className="sideNav"
              text="Wedding"
              url="/gallery/wedding"
            />
          </ul>
        </li>
      </ul>
      <style jsx>{`
        .dropDown {
          position: relative;
          display: inline-block;
        }
        .subLinksWrapper {
          display: none;
          padding-left: 1em;
          position: absolute;
          z-index: 1;
        }
        .dropDown:hover .subLinksWrapper {
          display: block;
        }
        .thisIsBS {
          color: ${styles.colors.peach};
          font-size: 1.2em;
          padding-bottom: 0.5em;
        }
        .thisIsBS:hover {
          font-size: 1.5em;
        }
      `}</style>
    </Menu>
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
