/**
 * @function clearText
 * @param {string} id
 */

export const clearText = (id) => {
  const /** @type {*} */ clearTextElement = document.getElementById(id);
  clearTextElement.textContent = '';
};
