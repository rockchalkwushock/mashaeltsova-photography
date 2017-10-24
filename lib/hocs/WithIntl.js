import { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData, injectIntl } from 'react-intl'
import { loadGetInitialProps } from 'next/dist/lib/utils'

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang])
  })
}

export default ComposedComponent => {
  const IntlPage = injectIntl(ComposedComponent)
  return class WithIntl extends Component {
    static propTypes = {
      ids: PropTypes.array,
      locale: PropTypes.string.isRequired,
      messages: PropTypes.object.isRequired,
      url: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      })
    }
    static async getInitialProps(ctx) {
      // Get the `locale` and `messages` from the request object on the server.
      // In the browser, use the same values that the server serialized.
      const { req } = ctx
      // First look to the server with `req` then the browser with `window`.
      const { locale, messages } = req || window.__NEXT_DATA__.props
      // NOTE: We pass ComposedComponent to keep the props from the
      // Component being passed to this HOC.
      const props = await loadGetInitialProps(ComposedComponent, ctx)
      return {
        locale,
        messages,
        ...props
      }
    }

    render() {
      const { locale, messages } = this.props
      return (
        <IntlProvider locale={locale} messages={messages}>
          <IntlPage {...this.props} />
        </IntlProvider>
      )
    }
  }
}
