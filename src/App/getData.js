/**
 * @typedef {import('./types').DataFromAPI} DataFromAPI
 */

/**
 * @function getData
 * @param {string} lang
 * @returns {Promise<DataFromAPI>}
 */

export const getData = async (lang) => {
  const url = `https://zen-npw-default-rtdb.firebaseio.com/${lang}.json`;
  const responce = await fetch(url);
  return responce.json();
};
