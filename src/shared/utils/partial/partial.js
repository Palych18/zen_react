/**
 * @param partial
 * @param {Function} func
 * @param  {*} args
 * @returns {*}
 */

export const partial = (func, ...args) => func.bind(null, ...args);
