import Head from 'next/head'
import { styles } from '../../lib'

export default () => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
      <title>Masha Eltsova Photography</title>
      <meta name="author" content="RCWS Development" />
      <meta
        name="description"
        content="Masha Eltsova is a professional photographer in Moscow, Russia who offers <options>. Schedule a shoot with her today!"
      />
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
    `}</style>
  </div>
)
