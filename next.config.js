/* eslint-disable no-new-require, no-param-reassign  */
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const { ANALYZE } = process.env

const APP_NAME = 'masha-eltsova-photography'

/**
 * NOTE
 *
 * Babel-Cache issue
 * @see https://github.com/zeit/next.js/issues/1103#issuecomment-279529809
 */

module.exports = {
  webpack: (config, { dev }) => {
    // Will only run for `yarn start analyze`
    if (!dev && ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }
    // Wipe out the babel cache in any environment
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        cacheId: APP_NAME,
        minify: true,
        staticFileGlobs: ['static/icons/**.*'],
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
}
