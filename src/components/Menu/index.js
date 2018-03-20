import React, { Component } from 'react'

import { Menu, MenuItem, MenuList } from './elements'
import { Icon } from '../commons'

class AppMenu extends Component {
  state = {
    isOpen: false,
    links: [
      { id: 0, text: 'Home' },
      { id: 1, text: 'About' },
      { id: 2, text: 'Contact' }
    ]
  }
  handleOnClick = () =>
    this.state.isOpen
      ? this.setState(state => ({ ...state, isOpen: false }))
      : this.setState(state => ({ ...state, isOpen: true }))
  renderLinks = () =>
    this.state.links.map(l => (
      <MenuItem key={l.id} state={this.state.isOpen}>
        {l.text}
      </MenuItem>
    ))
  render() {
    return (
      <Menu state={this.state.isOpen}>
        <Icon icon="bars" menu onClick={this.handleOnClick} size="2x" />
        <MenuList state={this.state.isOpen}>{this.renderLinks()}</MenuList>
      </Menu>
    )
  }
}

export default AppMenu
