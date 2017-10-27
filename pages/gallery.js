import { Component } from 'react'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import 'isomorphic-fetch'

import { Photo } from '../components'
import { fetchData } from '../lib'

const buttons = ['Family', 'Portrait', 'Travel', 'Wedding']

class BaseGalleryPage extends Component {
  static propTypes = {
    ids: PropTypes.array.isRequired
  }
  static async getInitialProps(ctx) {
    try {
      return {
        ...(await fetchData('family')),
        ...(await loadGetInitialProps(ctx))
      }
    } catch (err) {
      throw err
    }
  }
  state = {
    currentView: 'family',
    error: false,
    images: null
  }
  componentWillReceiveProps(nextProps) {
    console.log('CWRP lastProps', this.props)
    console.log('CWRP nextProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * FIXME
     * Here I should perform checks to make sure the state/props
     * have in fact changed to avoid needless renders.
     * i.e. Clicking 'portrait' over and over again.
     */
    console.log('SCU nextProps', nextProps)
    console.log('SCU nextState', nextState)
    return true
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
      <div>
        <div>{this.renderButtons()}</div>
        <div>{imgs.map(id => <Photo key={id} publicId={id} />)}</div>
      </div>
    )
  }
}

export default BaseGalleryPage
