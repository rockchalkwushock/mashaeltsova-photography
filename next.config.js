/* eslint-disable no-new-require, no-param-reassign  */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { ANALYZE } = process.env

/**
 * NOTE
 *
 * IgnorePlugin
 * @see https://arunoda.me/blog/ssr-and-server-only-modules
 * Babel-Cache issue
 * @see https://github.com/zeit/next.js/issues/1103#issuecomment-279529809
 */

module.exports = {
  webpack: config => {
    // Will only run for `yarn start analyze`
    if (ANALYZE) {
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

    return config
  }
}
