import Head from 'next/head'
import { styles } from '../../lib'

/**
 * TODO
 * 1. Add Google Site Verification <meta name="google-site-verification" content="getTokenFromGoogle" />
 * 2. Add /static/ & Favicon icons.
 * 3. Add Facebook Page Insights <meta name="fb:admins" content="fbUserID" />
 * 4. Pass props.message to access the localeData for specific keys.
 * 5. Finish Filling in empty keys.
 */

export default () => (
  <div>
    <Head>
      {/* COMMON TAGS */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
      <title>Masha Eltsova Photography</title>
      {/* SEO */}
      <meta name="author" content="RCWS Development" />
      <meta
        name="description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers <options>. Schedule a shoot with her today!"
      />
      {/* SCHEMA.ORG FOR GOOGLE */}
      <meta itemProp="name" content="Masha Eltsova Photography" />
      <meta
        itemProp="description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers <options>. Schedule a shoot with her today!"
      />
      <meta itemProp="image" content="" />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Masha Eltsova Photography" />
      <meta name="twitter:site" content="@user" />
      <meta name="twitter:creator" content="@user" />
      <meta
        name="twitter:description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers <options>. Schedule a shoot with her today!"
      />
      <meta name="twitter:image" content="" />
      <meta name="twitter:image:alt" content="Masha Eltsova Photography" />
      <meta name="twitter:url" content="https://mashaeltsovaphotography.com" />
      {/* FACEBOOK, PINTREST, GOOGLE+ */}
      <meta name="og:title" content="Masha Eltsova Photography" />
      <meta
        name="og:description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers <options>. Schedule a shoot with her today!"
      />
      <meta name="og:image" content="" />
      <meta name="og:image:secure_url" content="" />
      <meta name="og:image:alt" content="Masha Eltsova Photography" />
      <meta name="og:url" content="https://mashaeltsovaphotography.com" />
      <meta name="og:site_name" content="Masha Eltsova Photography" />
      <meta name="og:locale" content="ru_RU" />
      <meta name="og:locale:alternate" content="en_US" />
      <meta name="og:locale:alternate" content="en_GB" />
      <meta name="og:type" content="website" />
      {/* SPIDERS & BOTS */}
      <meta name="robots" content="index,follow,archive" />
      <meta name="googlebot" content="all" />
      {/* GOOGLE SITE VERIFICATION */}
      {/* FACEBOOK PAGE ANALYTICS */}
      {/* FAVICONS & TOUCH ICONS */}
      {/* EXTERNAL STYLESHEETS */}
      {/* Normalize CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* Google Fonts CDN */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Courgette|Nunito"
      />
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      a {
        color: ${styles.colors.warm};
        padding: 0.25em;
        text-decoration: none;
      }
      a:visited {
        color: ${styles.colors.warm};
      }
      a:focus,
      a:hover {
        color: ${styles.colors.powder};
      }
      button {
        border: 0;
        outline: 0;
        padding: 0.25em;
      }
      ul {
        list-style: none;
      }
      html,
      body {
        min-height: 100vh;
        overflow-x: hidden;
      }
      body {
        background-color: ${styles.colors.white};
        color: ${styles.colors.warm};
        font-family: ${styles.fonts.nunito};
        font-size: 1.2em;
        line-height: 1.5em;
      }
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${styles.colors.warm};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${styles.colors.warm},
          0 0 5px ${styles.colors.warm};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
)
