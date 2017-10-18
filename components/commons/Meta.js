import Head from 'next/head'
import { styles } from '../../lib'

/**
 * Styled-JSX notes
 * @see https://github.com/zeit/styled-jsx#dynamic-styles
 * @see https://github.com/zeit/styled-jsx#via-inline-style
 */

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        async
      />
      <link
        href="https://fonts.googleapis.com/css?family=Courgette|Nunito"
        rel="stylesheet"
        async
      />
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body {
        min-height: 100vh;
        overflow-x: hidden;
      }
      body {
        background-color: ${styles.colors.white};
        color: ${styles.colors.charcoal};
        font-family: ${styles.fonts.nunito};
        font-size: 1.2em;
        line-height: 1.5;
      }
    `}</style>
  </div>
)
