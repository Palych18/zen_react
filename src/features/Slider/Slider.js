import classes from './Slider.module.scss';
import { useData, useSlider } from 'shared/hooks';
import { getClassNames } from 'shared/utils/index';

/**
 * @function typingText
 * @param {string} text
 * @returns
 */
const typingText = (text) => {


  return text;
};

/**
 * @function Slider
 * @returns {null | JSX.Element}
 */

export const Slider = () => {
  const sliderState = useSlider();
  const dataState = useData();
  if (!dataState.data) return null;

  const openSlider = getClassNames(classes.modalSlider, {
    [ classes.active ]: sliderState.isSliderOpen,
  });

  const textDescription = dataState.data.care.image.description;

  return (
    <div className={openSlider}>
      <p>{typingText(textDescription)}</p>
      <div className={classes.slider}>
        <div className={classes.sliderClose}>
          <button className={classes.buttonClose}
            onClick={() => sliderState.setIsSliderOpen(!sliderState.isSliderOpen)}
          >
          </button>
        </div>
        <img src={dataState.data.care.image.source}/>
        <div className={classes.sliderSelect}>
          <button className={classes.buttonPrev}>{'<'}</button>
          <button className={classes.buttonNext}>{'>'}</button>
        </div>
        <p className={classes.sliderPagination}>3/3</p>
      </div>
    </div>
  );
};
