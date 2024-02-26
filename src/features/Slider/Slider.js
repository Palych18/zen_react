import classes from './Slider.module.scss';
import { useRef, useState, useEffect } from 'react';
import { useData, useSlider } from 'shared/hooks';
import { getClassNames } from 'shared/utils/index';

/**
 * @function Slider
 * @returns {null | JSX.Element}
 */

export const Slider = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  const sliderState = useSlider();
  const dataState = useData();

  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const /** @type {*} */ slides = slidesRef.current;
    if (!slides) return;
    if (direction === 0) {
      slides.style.left = '0';
    }
    if (direction > 0) {
      slides.style.left = `-${direction * 300}px`;
    }
  }, [direction]);

  const sliderClassNames = getClassNames(classes.modalSlider, {
    [classes.active]: sliderState.isSliderOpen,
  });

  const handlePrevClick = () => {
    setDirection(direction - 1);
  };

  const handleNextClick = () => {
    setDirection(direction + 1);
  };

  if (!dataState.data) return null;

  return (
    <div className={sliderClassNames}
      ref={sliderRef}
    >
      <div className={classes.wrapper}>
        {/* close */}
        <button className={classes.close}
          onClick={() => sliderState.setIsSliderOpen(!sliderState.isSliderOpen)}
        >
          X
        </button>
        {/* buttons */}
        <div className={classes.buttons}>
          {/* prev */}
          <button className={classes.button}
            onClick={handlePrevClick}
          >
            {'<'}
          </button>
          {/* next */}
          <button className={classes.button}
            onClick={handleNextClick}
          >
            {'>'}
          </button>
        </div>
        {/* slides */}
        <div className={classes.slides}
          ref={slidesRef}
        >
          <div className={classes.slide}><img src={dataState.data.download.image.source}/></div>
          <div className={classes.slide}><img src={dataState.data.warranty.image.source}/></div>
          <div className={classes.slide}><img src={dataState.data.care.image.source}/></div>
        </div>
        {/* counter */}
        <p className={classes.counter}>3/3</p>
      </div>
    </div>
  );
};
