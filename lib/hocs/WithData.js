import { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import 'isomorphic-fetch'

import getStore from '../redux'

const getInitialState = reduxStore => ({
  ...reduxStore.getState()
})

export default ComposedComponent =>
  class WithData extends Component {
    static propTypes = {
      initialState: PropTypes.object.isRequired
    }
    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      // Populate the reduxStore server-side.
      const reduxStore = getStore({})
      const props = { ...subProps }

      // Return the initialState of the application and other props.
      return {
        initialState: getInitialState(reduxStore),
        ...props
      }
    }
    constructor(props) {
      super(props)
      // Use the initialState created server-side to populate
      // the reduxStore in the browser.
      const reduxStore = getStore(this.props.initialState)
      this.reduxStore = reduxStore
    }
    render() {
      return (
        <Provider store={this.reduxStore}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
