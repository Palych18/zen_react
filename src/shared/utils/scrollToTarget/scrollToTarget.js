/**
 * @function scrollToTarget
 * @param {Element | null} target
 * @param {number} [duration]
 */

export const scrollToTarget = (target, duration = 700) => {
  let gap = 50;
  const minWidth = 1152;
  if (window.innerWidth >= minWidth) gap = 80;

  if (target) {
    const targetOffset = target.getBoundingClientRect().top + window.scrollY - gap;
    const initialOffset = window.scrollY;
    const distance = targetOffset - initialOffset;
    const startTime = performance.now();

    /** @type {(timestamp: number) => void} */
    const scrollAnimation = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /** @type {(progress: number) => number} */
      const ease = (progress) => {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      };

      window.scrollTo(0, initialOffset + distance * ease(progress));

      if (progress < 1) {
        window.requestAnimationFrame(scrollAnimation);
      }
    };

    window.requestAnimationFrame(scrollAnimation);
  } else {
    console.error(`Секция не найдена!`);
  }
};
