import { Component } from 'react'

import GalleryNavLink from './GalleryNavLink'
import { Nav } from '../commons'

const links = ['Family', 'Portrait', 'Travel', 'Wedding']

class GalleryNav extends Component {
  handleOnClick = e => {}
  renderLinks = () => {
    const navLinks = links.map(link => (
      <GalleryNavLink key={link} text={link} />
    ))
    return navLinks
  }
  render() {
    return <Nav>{this.renderLinks()}</Nav>
  }
}

export default GalleryNav
