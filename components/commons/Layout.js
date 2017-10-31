import { Component } from 'react'
import PropTypes from 'prop-types'

import { initGA, logPageView } from '../../lib'

import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import Icon from './Icon'
import Main from './Main'
import Meta from './Meta'
import Photo from './Photo'

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
    } else {
      // FIXME Temporary
      location = '/'
    }
    return (
      <div className="wrapper">
        <Meta />
        <Header className={location}>
          <Photo
            alt="Masha Eltsova Photography Logo"
            logo
            publicId="watermark"
          />
        </Header>
        <Main className={location}>{this.props.children}</Main>
        <Footer>
          <Container className="social">
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
          </Container>
          <Container className="copyright">
            <Icon
              icon="copyright"
              size="lg"
              url="https://rcws-development.com"
            />
          </Container>
        </Footer>
        <style jsx>{`
          .wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
