import axios from 'axios'
import 'isomorphic-fetch'

axios.defaults.baseURL = process.env.BACKEND_URL

/**
 * @function sendDataToMicroService
 *
 * @description Used for sending form data to micro-service
 *
 * @param {Object} values
 *
 * @returns {Object} res { message: String } || { error: String }
 */
export const sendDataToMicroService = async ({ values }) => {
  try {
    const { data } = await axios.post('/mail', values)
    return data
  } catch (e) {
    throw e
  }
}

/**
 * @function fetchData
 *
 * @description Used for fetching publicId's from API
 *
 * @param {String} tag - specific tag matching Cloudinary tags
 *
 * @returns {Array<String>} ids - ['publicId', ...]
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
    return { ids: 'shit' }
  } catch (err) {
    throw err
  }
}
