import { Component } from 'react'
import Link from 'next/link'
import raf from 'raf'

import Icon from '../commons/Icon'
import { styles } from '../../lib'

/**
 * Many thanks to @brthornbury for this component architecture.
 * @see https://github.com/brthornbury
 * @see https://gist.github.com/brthornbury/27531e4616b68131e512fc622a61baba
 */

export default class ScrollInNav extends Component {
  state = {
    handlingScrollUpdate: false,
    navHidden: true,
    offsetHeight: null,
    sliderHidden: true,
    viewPort: null
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const arr = window.document.getElementsByClassName('header')
    const viewPort = window.innerWidth
    this.setState(state => ({
      ...state,
      offsetHeight: arr[0].offsetHeight,
      viewPort
    }))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  getScrollY = () => {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else if (window.scrollTop !== undefined) {
      return window.scrollTop
    }
    return (document.documentElement ||
      document.body.parentNode ||
      document.body
    ).scrollTop
  }
  handleScroll = () => {
    const { handlingScrollUpdate } = this.state
    if (!handlingScrollUpdate) {
      this.setState(state => ({
        ...state,
        handlingScrollUpdate: true
      }))
      raf(this.update)
    }
  }
  update = () => {
    const currentScrollY = this.getScrollY()
    console.log(
      currentScrollY,
      this.state.offsetHeight,
      this.state.navHidden,
      this.state.sliderHidden
    )
    this.setState(state => ({
      ...state,
      handlingScrollUpdate: false,
      navHidden: currentScrollY < this.state.offsetHeight
    }))
  }
  toggleMobileMenu = () => {
    const { navHidden, sliderHidden, viewPort } = this.state
    // 1. If viewPort is >= 768px do not allow the slider to work.
    if (viewPort >= 768) return
    else if (!navHidden && sliderHidden) {
      // 2. If navigation is visible and slider is not: toggle open.
      document.getElementById('mobile-menu').style.height = '100vh'
      this.setState(state => ({
        ...state,
        sliderHidden: false
      }))
    } else if (!navHidden && !sliderHidden) {
      // 3. If navigation is visible and slider is visible: toggle closed.
      document.getElementById('mobile-menu').style.height = '0'
      this.setState(state => ({
        ...state,
        sliderHidden: true
      }))
    }
  }

  fixedStyle = {
    position: 'fixed',
    WebkitTransition: 'all .2s ease-in-out',
    MozTransition: 'all .2s ease-in-out',
    OTransition: 'all .2s ease-in-out',
    transition: 'all .2s ease-in-out',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  }

  hiddenStyle = {
    WebkitTransform: 'translateY(-100%)',
    MsTransform: 'translateY(-100%)',
    transform: 'translateY(-100%)'
  }

  scrolledInStyle = {
    WebkitTransform: 'translateY(0)',
    MsTransform: 'translateY(0)',
    transform: 'translateY(0)'
  }

  render() {
    let renderStyle = this.fixedStyle
    renderStyle = this.state.navHidden
      ? { ...renderStyle, ...this.hiddenStyle }
      : { ...renderStyle, ...this.scrolledInStyle }

    return (
      <div className="scroll-in-nav" style={renderStyle}>
        <nav className="navbar">
          <span className="open-slide">
            <svg width="30" height="30" onClick={this.toggleMobileMenu}>
              <path d="M0,5 30,5" stroke={styles.colors.warm} strokeWidth="5" />
              <path
                d="M0,14 30,14"
                stroke={styles.colors.warm}
                strokeWidth="5"
              />
              <path
                d="M0,23 30,23"
                stroke={styles.colors.warm}
                strokeWidth="5"
              />
            </svg>
          </span>
          <ul className="navbar-nav">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu" className="mobile-nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
          <div>
            <Icon
              icon="facebook"
              size="2x"
              url="https://www.facebook.com/masha.eltsova"
            />
            <Icon
              icon="instagram"
              size="2x"
              url="https://www.instagram.com/mashaeltcovaphotography"
            />
            <Icon icon="vk" size="2x" url="https://www.vk.com/club65938200" />
          </div>
        </div>
        <style jsx>{`
          nav {
            background-color: rgba(254, 220, 210, 0.9);
            display: flex;
            height: 70px;
            justify-content: space-between;
            padding: 0.5em;
            width: 100%;
          }
          span {
            align-self: center;
          }
          .mobile-nav {
            background-color: rgba(254, 220, 210, 0.9);
            height: 0;
            left: 0;
            opacity: 0.9;
            overflow-x: hidden;
            position: fixed;
            top: 70px;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            transition: 0.5s;
            width: 100%;
            z-index: 1;
          }

          .mobile-nav a {
            display: block;
            font-family: ${styles.fonts.courgette};
            font-size: 1.5em;
            -webkit-transition: 0.3s;
            -moz-transition: 0.3s;
            transition: 0.3s;
          }
          .mobile-nav a:hover {
            background-color: ${styles.colors.warm};
            color: ${styles.colors.peach};
          }
          @media (max-width: 768px) {
            .navbar-nav {
              display: none;
            }
          }
          @media (min-width: 768px) {
            nav {
              background-color: rgba(255, 255, 255, 0.7);
            }
            .navbar-nav {
              align-items: center;
              display: flex;
            }
          }
        `}</style>
      </div>
    )
  }
}
