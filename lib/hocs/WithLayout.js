import { Component } from 'react'
import PropTypes from 'prop-types'
// NOTE: Import like this to avoid bring Snap.svg into bundle!
import Menu from 'react-burger-menu/lib/menus/push'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { CustomLink, Main, Meta } from '../../components'

export default ComposedPage =>
  class WithLayout extends Component {
    static propTypes = {
      url: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      })
    }
    static async getInitialProps(ctx) {
      const props = await loadGetInitialProps(ComposedPage, ctx)
      return { ...props }
    }
    render() {
      const { pathname } = this.props.url
      const className = pathname === '/' ? 'mainGrid' : 'galleryGrid'
      return (
        <div id="wrapper">
          <Meta />
          <Menu pageWrapId={'main'} outerContainerId={'wrapper'}>
            <ul className="linksWrapper">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
                <ul className="subLinksWrapper">
                  <li>
                    <a href="/gallery#family">Family</a>
                  </li>
                  <li>
                    <a href="/gallery#portrait">Portrait</a>
                  </li>
                  <li>
                    <a href="/gallery#travel">Travel</a>
                  </li>
                  <li>
                    <a href="/gallery#wedding">Wedding</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Menu>
          <Main id="main" className={className}>
            <ComposedPage {...this.props} />
          </Main>
        </div>
      )
    }
  }
