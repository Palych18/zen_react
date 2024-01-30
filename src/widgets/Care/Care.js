import classes from './Care.module.scss';
import { useData } from 'shared/hooks';

/**
 * @typedef {import('./types').CareProps} CareProps
 */

/**
 * @function Care
 * @param {CareProps} props
 * @returns {null | JSX.Element}
 */

export const Care = (props) => {
  const dataState = useData();

  return (
    <section className={classes.care}
      id={dataState.data?.care.name}
    >
      <div className={classes.wrapper}>
        <div className={classes.textBlock}>
          <h1 className={classes.title}>
            {dataState.data?.care.title.content}
          </h1>
          {dataState.data?.care.texts.map((text, index) => (
            <p className={classes.text}
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        <img className={classes.image}
          src={dataState.data?.care.image.source}
          alt={dataState.data?.care.image.description}
        />
      </div>
    </section>
  );
};
