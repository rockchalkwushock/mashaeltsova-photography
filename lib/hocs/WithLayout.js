import { Component } from 'react'
import PropTypes from 'prop-types'
// NOTE: Import like this to avoid bring Snap.svg into bundle!
import Menu from 'react-burger-menu/lib/menus/push'
import { loadGetInitialProps } from 'next/dist/lib/utils'

/**
 * NOTE
 * FIXME
 * REVIEW
 *
 * Cannot use a className out of scope. Because of this I must
 * create an individual style for `<a>Gallery</a>`. I could apply
 * `<CustomLink />` however `href` is a required propType on `<Link />`.
 * Passing `url='#'` will change the url to 'mashaeltsovaphotography.com/#'
 * which is not good but also not terrible. I will also receive an error from
 * React about supplying an `<li />` as a child to another `<li />` which is
 * no bueno.
 *
 * REVIEW
 *
 * Add transitions / animations to dropdown menu and links as hovered
 * for better UX...God did I really just write this??? Am I becoming a
 * front end developer?!?!?
 *
 * REVIEW
 *
 * Hey guy! Remember before you forget that `loadGetInitialProps()` is
 * returning a promise so you should probably `await` that mofo or be all
 * bewildered as to why some of your props are not showing up!!!
 *
 */

import { CustomLink, Main, Meta } from '../../components'
import styles from '../constants'

export default ComposedPage =>
  class WithLayout extends Component {
    static propTypes = {
      ids: PropTypes.array,
      locale: PropTypes.string.isRequired,
      messages: PropTypes.object.isRequired,
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
      const className = pathname !== '/' ? 'galleryGrid' : 'mainGrid'
      return (
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
          <Main id="main" className={className}>
            <ComposedPage {...this.props} />
          </Main>
        </div>
      )
    }
  }
