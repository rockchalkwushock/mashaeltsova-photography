import { Component } from 'react'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import 'isomorphic-fetch'

import { fetchData, WithIntl } from '../lib'
import { Footer, Layout, Nav, Photo, Section } from '../components'

const buttons = ['Family', 'Portrait', 'Travel', 'Wedding']

class BaseGalleryPage extends Component {
  static propTypes = {
    ids: PropTypes.array.isRequired,
    intl: PropTypes.object,
    messages: PropTypes.object,
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
      const { ids } = await fetchData(target)
      if (ids.length === 1) {
        this.setState({ currentView: target, error: true, images: ids })
        // FIXME: Handle ERROR STATE VIEW.
      }
      this.setState(state => ({ ...state, currentView: target, images: ids }))
    } catch (err) {
      throw err
    }
  }
  renderButtons = () =>
    buttons.map(str => (
      <button key={str} name={str.toLowerCase()} onClick={this.handleOnClick}>
        {str}
      </button>
    ))
  render() {
    // REVIEW: GOOD? BAD? UGLY?
    // QUESTION: Should I just make the call in CDM() & then handleOnClick()?
    // QUESTION: Does making the first call from getInitialProps() lead to better performance?
    // Currently if currentView equal 'family' return the array fetched by getInitialProps
    // If it's not then return the array fetched by handleOnClick & set on state.images.
    const imgs =
      this.state.currentView === 'family' ? this.props.ids : this.state.images
    return (
      <Layout pathname={this.props.url.pathname}>
        <Section header>
          <h1>Gallery</h1>
        </Section>
        <Nav>{this.renderButtons()}</Nav>
        <div>{imgs.map(id => <Photo key={id} publicId={id} />)}</div>
        <Footer intl={this.props.intl} />
      </Layout>
    )
  }
}

export default WithIntl(BaseGalleryPage)
