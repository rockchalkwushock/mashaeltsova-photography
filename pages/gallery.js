import { Component } from 'react'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { A, Layout, Photo, SubNav } from '../components'
import { fetchData } from '../lib'

class Gallery extends Component {
  static propTypes = {
    ids: PropTypes.array.isRequired,
    url: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    })
  }
  static async getInitialProps(ctx) {
    try {
      const props = await loadGetInitialProps(ctx)
      const { ids } = await fetchData('family')
      return { ids, ...props }
    } catch (err) {
      throw err
    }
  }
  handleOnClick = e => {
    console.log(e.currentTarget.name)
  }
  renderButtons = () =>
    ['Family', 'Portrait', 'Travel', 'Wedding'].map(str => (
      <A key={str} onClick={this.handleOnClick} text={str} />
    ))
  renderPhotos = () =>
    this.props.ids.map(id => <Photo key={id} publicId={id} />)
  render() {
    return (
      <Layout url={this.props.url}>
        <SubNav>{this.renderButtons()}</SubNav>
        {this.renderPhotos()}
      </Layout>
    )
  }
}

export default Gallery
