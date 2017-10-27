/* eslint-disable no-return-assign, no-param-reassign */

export const isProd = process.env.NODE_ENV === 'production'
export const clearKeys = values =>
  Object.keys(values).forEach(key => (values[key] = ''))
export const createUrl = (w, i, condition) =>
  condition === 'base'
    ? `https://res.cloudinary.com/${process.env
        .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_${w}/${i}`
    : `https://res.cloudinary.com/${process.env
        .CLOUD_NAME}/c_scale,f_auto,q_auto:best,w_${w}/${i} ${w}w`
