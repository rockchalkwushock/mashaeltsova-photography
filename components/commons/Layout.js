/* eslint-disable no-unused-vars */
import { Component } from 'react'
import Raven from 'react-raven'
import Router from 'next/router'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Menu from '../menu'
import Meta from './Meta'
import Photo from './Photo'
import Wrapper from './Wrapper'

import { initGA, logPageView } from '../../lib'

// Set up NProgress for routing changes
Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    })
  }
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    const { pathname } = this.props.url
    let location
    if (pathname === '/') {
      location = 'index'
    } else if (pathname === '/gallery') {
      location = 'gallery'
    }
    return (
      <Wrapper>
        <Raven dsn={process.env.SENTRY} />
        <Meta />
        <Menu />
        <Header className={location}>
          <Photo
            alt="Masha Eltsova Photography Logo"
            logo
            publicId="watermark"
          />
        </Header>
        <Main className={location}>{this.props.children}</Main>
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
