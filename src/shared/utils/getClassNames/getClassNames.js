/** @typedef {import('./types').ModClassNames} ModClassNames */

/**
 * @function getClassNames
 * @param {string} baseClassName
 * @param {ModClassNames} modClassNames
 * @param {string[] | []} otherClassNames
 * @return {string}
 */

export const getClassNames = (
  baseClassName,
  modClassNames = {},
  otherClassNames = []) => [
  baseClassName,
  ...Object.entries(modClassNames)
    .filter((mod) => Boolean(mod[1]))
    .map((mod) => mod[0]),
  ...otherClassNames.filter(Boolean),
].join(' ');
