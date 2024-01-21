import classes from './Cashback.module.scss';
import { getClassNames } from 'shared/utils';
import { Order } from 'features/Order';

/**
 * @typedef {import('./types').CashbackProps} CashbackProps
 */

/**
 *  @function Cashback
 * @param {CashbackProps} props
 * @returns {JSX.Element}
 */

export const Cashback = (props) => {

  const themeButton = getClassNames(
    classes.buttonOrderOpen,
    { [ classes.dark ]: props.theme === 'dark' },
  );

  const handleOpenOrderClick = () => {

  };

  return (
    <>
      {/* Cashback */}
      <section className={classes.cashback}
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
            <button className={themeButton}
              onClick={handleOpenOrderClick}
            >
              {props.details.buttonText}
            </button>
          </div>
        </div>
      </section>
      {/* Order */}
      <Order />
    </>
  );
};
