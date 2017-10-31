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
        .CLOUD_NAME}/c_scale,dpr_auto,f_auto,q_auto:best,r_15,w_${width}/c_scale,dpr_auto,f_auto,g_south_east,l_watermark,o_60,w_100,x_2,y_2/${id}`
