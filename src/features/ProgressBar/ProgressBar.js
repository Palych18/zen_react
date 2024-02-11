import classes from './ProgressBar.module.scss';
import { useState, useEffect } from 'react';

/**
 * @function ProgressBar
 * @returns {JSX.Element}
 */

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / (fullHeight - windowHeight)) * 100;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress]);

  return (
    <progress className={classes.progress} max='100' value={scrollProgress}></progress>
  );
};
