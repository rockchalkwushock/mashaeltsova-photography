/* eslint-disable no-return-assign, no-param-reassign */

export const isProd = process.env.NODE_ENV === 'production'
export const clearKeys = values =>
  Object.keys(values).forEach(key => (values[key] = ''))
