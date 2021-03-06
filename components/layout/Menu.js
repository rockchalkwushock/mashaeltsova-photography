import { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import raf from 'raf'

import { A, Icon } from '../commons'

/**
 * Many thanks to @brthornbury for this component architecture.
 * @see https://github.com/brthornbury
 * @see https://gist.github.com/brthornbury/27531e4616b68131e512fc622a61baba
 */

export default class Menu extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired
  }
  state = {
    handlingScrollUpdate: false,
    navHidden: true,
    offsetHeight: null,
    sliderHidden: true
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const arr = window.document.getElementsByClassName('header')
    this.setState(state => ({
      ...state,
      offsetHeight: arr[0].offsetHeight
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
    const { offsetHeight, sliderHidden } = this.state
    const currentScrollY = this.getScrollY()
    if (!sliderHidden) {
      document.getElementById('mobile-menu').style.height = '0'
      this.setState(state => ({
        ...state,
        handlingScrollUpdate: false,
        navHidden: currentScrollY < offsetHeight,
        sliderHidden: true
      }))
    }
    this.setState(state => ({
      ...state,
      handlingScrollUpdate: false,
      navHidden: currentScrollY < offsetHeight
    }))
  }
  toggleMobileMenu = () => {
    const { navHidden, sliderHidden } = this.state
    if (!navHidden && sliderHidden) {
      // 1. If navigation is visible and slider is not: toggle open.
      document.getElementById('mobile-menu').style.height = '100vh'
      this.setState(state => ({
        ...state,
        sliderHidden: false
      }))
    } else if (!navHidden && !sliderHidden) {
      // 2. If navigation is visible and slider is visible: toggle closed.
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
    const [home, gallery] = this.props.messages.sideNav.split(',')
    return (
      <div className="scroll-in-nav" style={renderStyle}>
        <nav className="navbar">
          <span className="open-slide">
            <FontAwesome
              name="bars"
              size="2x"
              onClick={this.toggleMobileMenu}
            />
          </span>
        </nav>
        <div id="mobile-menu" className="mobile-nav">
          <A className="mobileNavLink" navigate text={home} url="/" />
          <A className="mobileNavLink" navigate text={gallery} url="/gallery" />
          <div className="social">
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
            <Icon
              icon="twitter"
              size="2x"
              url="https://twitter.com/MASHAELTSOVA"
            />
          </div>
        </div>
        <style jsx>{`
          nav {
            background-color: rgba(254, 220, 210, 0.9);
            -webkit-box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
            box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
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
          .social {
            padding: 0.5em;
          }
        `}</style>
      </div>
    )
  }
}
