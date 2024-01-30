import classes from './Cashback.module.scss';
import { getClassNames } from 'shared/utils';
import { useData, useTheme, useOpenOrder } from 'shared/hooks';
import { Order } from 'features/Order';

/**
 * @typedef {import('./types').CashbackProps} CashbackProps
 */

/**
 *  @function Cashback
 * @param {CashbackProps} props
 * @returns {null | JSX.Element}
 */

export const Cashback = (props) => {
  const dataState = useData();
  const themeState = useTheme();
  const orderState = useOpenOrder();

  const themeButton = getClassNames(
    classes.buttonOrderOpen,
    { [ classes.dark ]: themeState.theme === 'dark' },
  );

  return (
    <>
      {/* Cashback */}
      <section className={classes.cashback}
        id={dataState.data?.cashback.name}
      >
        <div className={classes.wrapper}>
          <div className={classes.textBlock}>
            <h1 className={classes.title}>
              {dataState.data?.cashback.title.content}
            </h1>
            {dataState.data?.cashback.texts.map((text, index) => (
              <p className={classes.text}
                key={index}
              >
                {text}
              </p>
            ))}
            <button className={themeButton}
              onClick={() => orderState.setIsOrderOpen(!orderState.isOrderOpen)}
            >
              {dataState.data?.cashback.buttonText}
            </button>
          </div>
        </div>
      </section>
      {/* Order */}
      <Order />
    </>
  );
};
