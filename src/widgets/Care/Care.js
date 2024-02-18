import classes from './Care.module.scss';
import { useData, useSlider } from 'shared/hooks';

/**
 * @function Care
 * @returns {null | JSX.Element}
 */

export const Care = () => {
  const dataState = useData();
  const sliderState = useSlider();

  if (!dataState.data?.care) return null;

  const handleSliderOpenClick = () => {
    sliderState.setIsSliderOpen(!sliderState.isSliderOpen);
  };

  return (
    <>
      {/* Care */}
      <section className={classes.care}
        id={dataState.data?.care.name}
      >
        {/* Wrapper */}
        <div className={classes.wrapper}>
          {/* TextBlock */}
          <div className={classes.textBlock}>
            {/* Title */}
            <h1 className={classes.title}>
              {dataState.data?.care.title.content}
            </h1>
            {/* Texts */}
            {dataState.data?.care.texts.map((text, index) => (
              <p className={classes.text}
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
          {/* PreviewBlock */}
          <button className={classes.preview}
            onClick={handleSliderOpenClick}
          >
            <img
              src={dataState.data?.care.image.source}
              alt={dataState.data?.care.image.description}
            />
          </button>
        </div>
      </section>
    </>
  );
};
