import classes from './Warranty.module.scss';

/**
 * @typedef {import('./types').WarrantyProps} WarrantyProps
 */

/**
 * @function Warranty
 * @param {WarrantyProps} props
 * @returns {JSX.Element}
 */

export const Warranty = (props) => {

  return (
    <section className={classes.warranty}>
      <div className={classes.wrapper}>
        <div className={classes.textBlock}>
          <h2 className={classes.title}>
            {props.details.title.content}
          </h2>
          {props.details.texts.map((text) => (
            <p className={classes.text}>{text}</p>
          ))}
        </div>
        <img className={classes.image}
          src={props.details.image.source}
          alt={props.details.image.description}
        />
      </div>
    </section>
  );
};
