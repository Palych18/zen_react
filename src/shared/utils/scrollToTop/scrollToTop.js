/**
 * @function scrollToTop
 * @returns {void}
 */

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
