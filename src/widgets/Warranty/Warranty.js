import classes from './Warranty.module.scss';
import { useData } from 'shared/hooks';

/**
 * @function Warranty
 * @returns {null | JSX.Element}
 */

export const Warranty = () => {
  const dataState = useData();

  if (!dataState.data?.warranty) return null;

  return (
    <section className={classes.warranty}
      id={dataState.data?.warranty.name}
    >
      {/* Wrapper */}
      <div className={classes.wrapper}>
        {/* TextBlock */}
        <div className={classes.textBlock}>
          {/* Title */}
          <h2 className={classes.title}>
            {dataState.data?.warranty.title.content}
          </h2>
          {/* Texts */}
          {dataState.data?.warranty.texts.map((text, index) => (
            <p className={classes.text}
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        {/* PreviewBlock */}
        <button className={classes.preview}>
          <img
            src={dataState.data?.warranty.image.source}
            alt={dataState.data?.warranty.image.description}
          />
        </button>
      </div>
    </section>
  );
};
