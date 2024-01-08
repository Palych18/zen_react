import classes from './Care.module.scss';

/**
 * @typedef {import('./types').CareProps} CareProps
 */

/**
 * @function Care
 * @param {CareProps} props
 * @returns {JSX.Element}
 */

export const Care = (props) => {

  return (
    <section className={classes.care}
      id={props.details.name}
    >
      <div className={classes.wrapper}>
        <div className={classes.textBlock}>
          <h1 className={classes.title}>
            {props.details.title.content}
          </h1>
          {props.details.texts.map((text, index) => (
            <p className={classes.text}
              key={index}
            >
              {text}
            </p>
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
