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
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
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
      section {
        color: ${styles.colors.warm};
        background-color: ${styles.colors.powder};
        padding: 1em;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      /* BURGER MENU */
      /* Position and sizing of burger button */
      .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
      }

      /* Color/shape of burger icon bars */
      .bm-burger-bars {
        background: #373a47;
      }

      /* Position and sizing of clickable cross button */
      .bm-cross-button {
        height: 24px;
        width: 24px;
      }

      /* Color/shape of close button cross */
      .bm-cross {
        background: #bdc3c7;
      }

      /* General sidebar styles */
      .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
      }

      /* Morph shape necessary with bubble or elastic */
      .bm-morph-shape {
        fill: #373a47;
      }

      /* Wrapper for item list */
      .bm-item-list {
        color: #b8b7ad;
        display: flex;
        flex-direction: column;
        padding: 0.8em;
      }

      /* Styling of overlay */
      .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </div>
)
