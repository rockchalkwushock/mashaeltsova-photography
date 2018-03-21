const { resolve } = require('path')

module.exports = {
  siteMetadata: {
    title: 'Masha Eltsova Photography'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: resolve(__dirname, 'images')
      }
    },
    'gatsby-transformer-sharp'
  ]
}
