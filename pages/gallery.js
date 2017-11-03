import { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { A, GalleryGrid, Layout, Photo, SubNav } from '../components'
import { fetchData, translate, withIntl } from '../lib'

export class Gallery extends Component {
  static propTypes = {
    ids: PropTypes.array.isRequired,
    intl: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    messages: PropTypes.object.isRequired,
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
    const target = translate(e.currentTarget.name)
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
    this.props.messages.galleryNav
      .split(',')
      .map(t => (
        <A
          className="galleryButton"
          key={t}
          onClick={this.handleOnClick}
          text={t}
        />
      ))
  render() {
    const imgs =
      this.state.currentView === 'family' || this.state.currentView === 'Семья'
        ? this.props.ids
        : this.state.images
    return (
      <Layout url={this.props.url}>
        <Head>
          <title>Masha Eltsova Photography | Gallery</title>
          {/* SEO */}
          <meta
            name="description"
            content="Masha Eltsova Photography professional gallery and portfolio."
          />
          {/* SCHEMA.ORG FOR GOOGLE */}
          <meta itemProp="name" content="Masha Eltsova Photography | Gallery" />
          <meta
            itemProp="description"
            content="Masha Eltsova Photography professional gallery and portfolio."
          />
          {/* TWITTER */}
          <meta
            name="twitter:title"
            content="Masha Eltsova Photography | Gallery"
          />
          <meta
            name="twitter:description"
            content="Masha Eltsova Photography professional gallery and portfolio."
          />
          <meta
            name="twitter:url"
            content="https://mashaeltsovaphotography.com/gallery"
          />
          {/* FACEBOOK, PINTREST, GOOGLE+ */}
          <meta name="og:title" content="Masha Eltsova Photography | Gallery" />
          <meta
            name="og:description"
            content="Masha Eltsova Photography professional gallery and portfolio."
          />
          <meta
            name="og:site_name"
            content="Masha Eltsova Photography | Gallery"
          />
          <meta
            name="og:url"
            content="https://mashaeltsovaphotography.com/gallery"
          />
        </Head>
        <SubNav>{this.renderButtons()}</SubNav>
        <GalleryGrid>
          {imgs.map(id => <Photo key={id} publicId={id} />)}
        </GalleryGrid>
      </Layout>
    )
  }
}

export default withIntl(Gallery)
