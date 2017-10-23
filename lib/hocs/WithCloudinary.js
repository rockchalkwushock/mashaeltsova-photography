import { Component } from 'react'
import PropTypes from 'prop-types'
import { CloudinaryContext } from 'cloudinary-react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import 'isomorphic-fetch'

import { isProd } from '../api'

const url = isProd ? 'https://mep-v1.now.sh' : 'http://localhost:4000'

export default ComposedComponent =>
  class WithCloudinary extends Component {
    static propTypes = {
      ids: PropTypes.array.isRequired,
      locale: PropTypes.string.isRequired,
      messages: PropTypes.object.isRequired,
      url: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      })
    }
    static async getInitialProps(ctx) {
      const props = await loadGetInitialProps(ComposedComponent, ctx)
      // Get 'tag' from the url.pathname via server ctx
      const tag = ctx.pathname.substring(9)
      const res = await fetch(`${url}/images/${tag}`)
      const { ids } = await res.json()
      return { ids, ...props }
    }
    render() {
      return (
        <CloudinaryContext cloudName="rockchalkwushock">
          <ComposedComponent {...this.props} />
        </CloudinaryContext>
      )
    }
  }
