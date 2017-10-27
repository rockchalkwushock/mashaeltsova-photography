/* eslint-disable no-return-assign, no-param-reassign */

const errorImgId = 'sample'
export const isProd = process.env.NODE_ENV === 'production'

/**
 * REVIEW
 * FIXME
 * BUG
 * This returns undefined because that is what forEach() returns!!!
 * @function clearKeys
 *
 * @description Used for automating clearing keys with setState()
 *
 * @param {Object} values - values from booking form
 *
 * @returns
 */
export const clearKeys = values =>
  Object.keys(values).forEach(key => (values[key] = ''))

/**
 * @function createUrl
 *
 * @description Used for populating Cloudinary dynamic urls with required data.
 *
 * @param {Number} w - pixels for width
 * @param {String} i - publicId
 * @param {String} condition - use for distinguishing base imageUrl vs mediaQueries
 *
 * @returns {String} imageUrl
 */
export const createUrl = (w, i, condition) =>
  condition === 'base'
    ? `https://res.cloudinary.com/${process.env
        .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_${w}/${i}`
    : `https://res.cloudinary.com/${process.env
        .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_${w}/${i} ${w}w`

/**
 * @function fetchData
 *
 * @description Used for fetching publicId's from API
 *
 * @param {String} tag - specific tag matching Cloudinary tags
 *
 * @returns {Array<String>} ids - ['publicId', ....]
 */
export const fetchData = async tag => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/images/${tag}`)
    // Check that we haven't hit limit & we are not running in the browser
    if (res.headers.get('x-rate-limit-remaining') > 0 && !process.browser) {
      const { ids } = await res.json()
      return { ids }
      // Run this block if in browser because
      // res.headers.get('x-rate-limit-remaining') = null when in browser
    } else if (process.browser) {
      const { ids } = await res.json()
      return { ids }
    }
    // Return if rate limit hit with some kind of view.
    // Even if it's shitty it's better than a black screen of garbage to an end user.
    // FIXME Find something to use, maybe the logo with a caption.
    return { ids: [errorImgId] }
  } catch (err) {
    throw err
  }
}
