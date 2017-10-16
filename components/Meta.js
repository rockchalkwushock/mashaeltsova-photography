import Head from 'next/head'
import { styles } from '../lib'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        async
      />
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
      }
      body {
        background-color: ${styles.colors.white};
        color: ${styles.colors.charcoal};
        font-family: ${styles.fonts.nunito};
      }
    `}</style>
  </div>
)
