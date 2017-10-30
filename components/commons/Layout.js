import { Component } from 'react'
import { initGA, logPageView } from '../../lib'

import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import Icon from './Icon'
import Meta from './Meta'
import Photo from './Photo'

class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <div className="wrapper">
        <Meta />
        <Header>
          <Photo alt="Masha Eltsova Photography Logo" publicId="watermark" />
        </Header>
        {this.props.children}
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
