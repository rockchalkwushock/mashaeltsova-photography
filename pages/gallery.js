import { Component } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { A, Grid, Layout, Photo, SubNav, Thumb } from '../components'
import { fetchData, translate, withIntl } from '../lib'

export class Gallery extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
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
      return { photos: ids, ...props }
    } catch (err) {
      throw err
    }
  }
  state = {
    currentView: 'family',
    error: false,
    image: null,
    images: null,
    modal: false
  }
  dismissModal = () => {
    this.setState(state => ({
      ...state,
      image: null,
      modal: false
    }))
  }
  handleOnClick = async e => {
    const target = translate(e.currentTarget.name)
    try {
      NProgress.start()
      const { ids } = await fetchData(target)
      if (ids.length === 1) {
        this.setState(state => ({
          ...state,
          currentView: target,
          error: true,
          image: null,
          images: ids,
          modal: false
        }))
        NProgress.done()
        // FIXME: Handle ERROR STATE VIEW.
      }
      this.setState(state => ({
        ...state,
        currentView: target,
        image: null,
        images: ids,
        modal: false
      }))
      NProgress.done()
    } catch (err) {
      throw err
    }
  }
  showPhoto = id => {
    this.setState(state => ({
      ...state,
      image: id,
      modal: true
    }))
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
  renderView() {
    const imgs =
      this.state.currentView === 'family' || this.state.currentView === 'Семья'
        ? this.props.photos
        : this.state.images
    if (this.state.modal) {
      return (
        <Photo
          onDismiss={() => this.dismissModal()}
          publicId={this.state.image}
        />
      )
    }
    return imgs.map(id => (
      <Thumb
        key={id}
        onClick={() => this.showPhoto(id)}
        publicId={id}
        view={this.state.currentView}
      />
    ))
  }
  render() {
    return (
      <Layout messages={this.props.messages} url={this.props.url}>
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
        <Grid>{this.renderView()}</Grid>
      </Layout>
    )
  }
}

export default withIntl(Gallery)
