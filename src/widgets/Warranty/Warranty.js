import classes from './Warranty.module.scss';
import { useData } from 'shared/hooks/useData';

/**
 * @typedef {import('./types').WarrantyProps} WarrantyProps
 */

/**
 * @function Warranty
 * @param {WarrantyProps} props
 * @returns {null | JSX.Element}
 */

export const Warranty = (props) => {
  const dataState = useData();

  return (
    <section className={classes.warranty}
      id={dataState.data?.warranty.name}
    >
      <div className={classes.wrapper}>
        <div className={classes.textBlock}>
          <h2 className={classes.title}>
            {dataState.data?.warranty.title.content}
          </h2>
          {dataState.data?.warranty.texts.map((text, index) => (
            <p className={classes.text}
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        <img className={classes.image}
          src={dataState.data?.warranty.image.source}
          alt={dataState.data?.warranty.image.description}
        />
      </div>
    </section>
  );
};
