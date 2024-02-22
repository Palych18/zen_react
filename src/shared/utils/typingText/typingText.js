/**
 * @function typingText
 * @param {string} text
 * @param {number} delay
 * @returns {*}
 */

export const typingText = (text, delay = 100) => {
  const /** @type {*} */ typingTextElement = document.getElementById('textDescription');
  if (typingTextElement) {
    let index = 0;
    const typeText = () => {
      if (index < text.length) {
        typingTextElement.textContent += text[index];
        ++index;
        setTimeout(typeText, delay);
      }
    };

    typeText();
  };
};
