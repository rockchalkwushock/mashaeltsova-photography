import Head from 'next/head'
import { styles } from '../../lib'

/**
 * TODO:
 * 1) Google Site Verification
 * 2) og:image - add image to logo using Cloudinary for both http & https links
 *
 * Styled-JSX notes
 * @see https://github.com/zeit/styled-jsx#dynamic-styles
 * @see https://github.com/zeit/styled-jsx#via-inline-style
 *
 * Meta Cards
 * @see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
 * @see http://ogp.me
 *
 * Crawlers & Other
 * @see https://support.google.com/webmasters/answer/1061943
 * @see https://support.google.com/webmasters/answer/35624?visit_id=0-636447351334044411-1111469053&rd=1
 * @see https://support.google.com/webmasters/answer/35624?rd=1#1
 * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
 *
 * REVIEW
 * Can possibly optimize the loading of my fonts with Google.
 * @see https://developers.google.com/fonts/docs/getting_started#optimizing_your_font_requests
 */

export default () => (
  <div>
    <Head>
      {/* BASICS */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
      {/* SITE INFORMATION */}
      <meta name="author" content="" />
      <meta name="description" content="" />
      <meta
        name="apple-mobile-web-app-title"
        content="Masha Eltsova Photography"
      />
      <meta name="application-name" content="Masha Eltsova Photography" />
      <meta
        name="msapplication-config"
        content="https://mashaeltsovaphotography.com/static/images/browserconfig.xml"
      />
      <meta name="theme-color" content="#bfd8d2" />
      {/* SPIDERS */}
      <meta name="robots" content="index,follow,archive" />
      <meta name="googlebot" content="all" />
      {/* GOOGLE SITE VERIFICATION */}
      {/* TODO <meta name="google-site-verification" content="" /> */}
      {/* OG CARDS */}
      <meta property="og:title" content="Masha Eltsova Photography" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image:alt" content="Masha Eltsova Photography Logo" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:url" content="https://mashaeltsovaphotography.com" />
      <meta property="og:description" content="" />
      <meta property="og:site_name" content="Masha Eltsova Photography" />
      {/* TWITTER CARDS */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="@RockChalkDev" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:title" content="Masha Eltsova Photography" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:image:alt" content="" />
      <meta name="twitter:url" content="https://mashaeltsovaphotography.com" />
      {/* FAVICONS & TOUCH ICONS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://mashaeltsovaphotography.com/static/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://mashaeltsovaphotography.com/static/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://mashaeltsovaphotography.com/static/images/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://mashaeltsovaphotography.com/static/images/manifest.json"
      />
      <link
        rel="mask-icon"
        href="https://mashaeltsovaphotography.com/static/images/safari-pinned-tab.svg"
        color="#df744a"
      />
      <link
        rel="shortcut icon"
        href="https://mashaeltsovaphotography.com/static/images/favicon.ico"
      />
      {/* EXTERNAL FONTS & STYLES */}
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
