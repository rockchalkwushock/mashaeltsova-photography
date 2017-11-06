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
 * @throws { error: 'message' }
 */
export const fetchData = async tag => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/images/${tag}`)
    // Check that we haven't hit limit & if we have return an error message.
    if (res.status === 429) {
      return { error: 'Too many requests, try back later.', ids: null }
    }
    const { ids } = await res.json()
    return { error: null, ids }
  } catch (err) {
    throw err
  }
}
