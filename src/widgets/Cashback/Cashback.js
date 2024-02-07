import classes from './Cashback.module.scss';
import { getClassNames } from 'shared/utils';
import { useData, useTheme, useOrder } from 'shared/hooks';
import { Order } from 'features/Order';

/**
 *  @function Cashback
 * @returns {null | JSX.Element}
 */

export const Cashback = () => {
  const dataState = useData();
  const themeState = useTheme();
  const orderState = useOrder();

  if (!dataState.data?.cashback) return null;

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
        {/* Wrapper */}
        <div className={classes.wrapper}>
          {/* TextBlock */}
          <div className={classes.textBlock}>
            {/* Title */}
            <h1 className={classes.title}>
              {dataState.data?.cashback.title.content}
            </h1>
            {/* Texts */}
            {dataState.data?.cashback.texts.map((text, index) => (
              <p className={classes.text}
                key={index}
              >
                {text}
              </p>
            ))}
            {/* ButtonOrder */}
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
