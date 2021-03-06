import Document, { Head, Main, NextScript } from 'next/document'
import { loadGetInitialProps } from 'next/dist/lib/utils'

// Polyfill Intl API for older browsers
// https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${locale}

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class NextDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const { locale, localeDataScript } = ctx.req
      const props = await loadGetInitialProps(Document, ctx)
      return {
        ...props,
        locale,
        localeDataScript
      }
    } catch (e) {
      throw e
    }
  }

  render() {
    const { locale, localeDataScript } = this.props
    return (
      <html
        itemScope
        itemType="http://schema.org/Article"
        lang={locale}
        prefix="og: http://ogp.me/ns#"
      >
        <Head />
        <body>
          <Main />
          <script
            src={`https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${locale}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: localeDataScript
            }}
          />
          <NextScript />
        </body>
      </html>
    )
  }
}
