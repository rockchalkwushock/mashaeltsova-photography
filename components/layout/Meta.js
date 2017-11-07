import Head from 'next/head'
import { styles } from '../../lib'

/**
 * TODO
 * 1. Have Masha make a Page on Facebook & an ad.
 * 2. Have Masha make her IG account a business account.
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
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers family, portraits, wedding, & engagement photography. Schedule a shoot with her today!"
      />
      {/* SCHEMA.ORG FOR GOOGLE */}
      <meta itemProp="name" content="Masha Eltsova Photography" />
      <meta
        itemProp="description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers family, portraits, wedding, & engagement photography. Schedule a shoot with her today!"
      />
      <meta
        itemProp="image"
        content="https://res.cloudinary.com/mashaeltsovaphotography/c_scale,f_auto,h_360,q_auto:best,w_600/mep_png_logo.png"
      />
      {/* TWITTER */}
      <meta name="twitter:site" content="@MASHAELTSOVA" />
      <meta name="twitter:creator" content="@MASHAELTSOVA" />
      <meta name="twitter:image:alt" content="Masha Eltsova Photography" />
      <meta name="twitter:url" content="https://mashaeltsovaphotography.com" />
      {/* FACEBOOK, PINTREST, GOOGLE+ */}
      <meta property="og:title" content="Masha Eltsova Photography" />
      <meta
        property="og:description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers family, portraits, wedding, & engagement photography. Schedule a shoot with her today!"
      />
      <meta
        property="og:image"
        content="http://res.cloudinary.com/mashaeltsovaphotography/c_scale,f_auto,h_360,q_auto:best,w_600/mep_png_logo.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://res.cloudinary.com/mashaeltsovaphotography/c_scale,f_auto,h_360,q_auto:best,w_600/mep_png_logo.png"
      />
      <meta property="og:image:alt" content="Masha Eltsova Photography" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:height" content="360" />
      <meta property="og:image:width" content="600" />
      <meta property="og:url" content="https://mashaeltsovaphotography.com" />
      <meta property="og:site_name" content="Masha Eltsova Photography" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="1196109507189054" />
      {/* SPIDERS & BOTS */}
      <meta name="robots" content="index,follow,archive" />
      <meta name="googlebot" content="all" />
      {/* GOOGLE SITE VERIFICATION */}
      <meta
        name="google-site-verification"
        content="lOInQICWdMc50btwczBfjiy-7vFREiBO-hngKZzJs1s"
      />
      {/* FACEBOOK PAGE ANALYTICS */}
      {/* FAVICONS & TOUCH ICONS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/images/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/images/safari-pinned-tab.svg"
        color={styles.colors.warm}
      />
      <link rel="shortcut icon" href="/static/images/favicon.ico" />
      <meta
        name="msapplication-config"
        content="/static/images/browserconfig.xml"
      />
      <meta name="theme-color" content={styles.colors.warm} />
      {/* EXTERNAL STYLESHEETS */}
      {/* Normalize CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        async
      />
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        async
      />
      {/* Google Fonts CDN */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Courgette|Nunito"
        async
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
        border: 0;
        color: ${styles.colors.warm};
        outline: 0;
        padding: 0.25em;
        text-decoration: none;
      }
      a:visited {
        border: 0;
        color: ${styles.colors.warm};
        outline: 0;
      }
      a:focus,
      a:hover {
        border: 0;
        color: ${styles.colors.powder};
        outline: 0;
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
