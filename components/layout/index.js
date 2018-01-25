/* eslint-disable no-unused-vars */
import { Component } from 'react'
import Raven from 'react-raven'
import Router from 'next/router'
import FastClick from 'react-fastclick-alt'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Menu from './Menu'
import Meta from './Meta'
import Wrapper from './Wrapper'

import { Photo } from '../commons'
import { initGA, isProd, logPageView } from '../../lib'

/**
 * This should solve the problem of version mismatching with BUILD_ID in /.next
 * @see https://github.com/zeit/next.js/wiki/Handle-BUILD_ID-Mismatch-Error
 */
Router.onAppUpdated = function(nextRoute) {
  location.href = nextRoute
}

// Set up NProgress for routing changes
Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
  static propTypes = {
    messages: PropTypes.object.isRequired,
    url: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    })
  }
  componentDidMount() {
    if ('serviceWorker' in navigator && isProd) {
      navigator.serviceWorker.register('/service-worker.js')
    }
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
      <FastClick>
        <Wrapper>
          {isProd ? <Raven dsn={process.env.SENTRY} /> : null}
          <Meta />
          <Menu messages={this.props.messages} />
          <Header className={location}>
            <Photo logo publicId="watermark" />
          </Header>
          <Main className={location}>{this.props.children}</Main>
          <Footer />
        </Wrapper>
      </FastClick>
    )
  }
}

export default Layout
