import { Component } from 'react'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { A, GalleryGrid, Layout, Photo, SubNav } from '../components'
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
  state = {
    currentView: 'family',
    error: false,
    images: null
  }
  handleOnClick = async e => {
    const target = e.currentTarget.name
    try {
      NProgress.start()
      const { ids } = await fetchData(target)
      if (ids.length === 1) {
        this.setState({ currentView: target, error: true, images: ids })
        NProgress.done()
        // FIXME: Handle ERROR STATE VIEW.
      }
      this.setState(state => ({ ...state, currentView: target, images: ids }))
      NProgress.done()
    } catch (err) {
      throw err
    }
  }
  renderButtons = () =>
    ['Family', 'Portrait', 'Travel', 'Wedding'].map(str => (
      <A key={str} onClick={this.handleOnClick} text={str} />
    ))
  render() {
    const imgs =
      this.state.currentView === 'family' ? this.props.ids : this.state.images
    return (
      <Layout url={this.props.url}>
        <SubNav>{this.renderButtons()}</SubNav>
        <GalleryGrid>
          {imgs.map(id => <Photo key={id} publicId={id} />)}
        </GalleryGrid>
      </Layout>
    )
  }
}

export default Gallery
