/**
 * @function createUrl
 *
 * @description Used for configuring dynamic Url params.
 *
 * @param {Boolean} condition - which url should we use.
 * @param {String} id - publicId
 * @param {Number} width - pixels for width of photo.
 *
 * @returns {String} imageUrl
 */
export const createUrl = (condition, id, width) =>
  condition
    ? `https://res.cloudinary.com/${process.env
        .CLOUD_NAME}/c_scale,dpr_auto,f_auto,o_90,q_auto:best,w_${width}/${id}`
    : `https://res.cloudinary.com/${process.env
        .CLOUD_NAME}/c_scale,dpr_auto,f_auto,q_auto:best,r_15,w_${width}/${id}`

/**
 * @function translate
 *
 * @description Used for reversing translation to English for
 * proper RESTful routing on API.
 *
 * @param {String} str - button.name
 *
 * @returns {String}
 */
export const translate = str => {
  if (str === 'семья') {
    return 'family'
  } else if (str === 'портрет') {
    return 'portrait'
  } else if (str === 'путешествия') {
    return 'travel'
  } else if (str === 'свадьбы') {
    return 'wedding'
  }
  return str
}

/**
 * @function makeProps
 *
 * @description Used for creating top level props for testing.
 * @param {String} locale
 * @param {Object} messages
 * @param {String} pathname
 *
 * @returns {Object} props
 */
export const makeProps = (locale, messages, pathname) => ({
  intl: {},
  locale,
  messages,
  url: { pathname }
})
