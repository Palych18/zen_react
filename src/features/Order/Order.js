import { useState } from 'react';
import { useOrder } from 'shared/hooks';
import { getClassNames } from 'shared/utils/index';
import classes from './Order.module.scss';

/**
 * @function Order
 * @returns {JSX.Element}
 */

export const Order = () => {
  const orderState = useOrder();

  const [ privacyChecked, setPrivacyChecked ] = useState(true);
  const handlePrivacyChange = () => {
    setPrivacyChecked(!privacyChecked);
  };

  const openOrder = getClassNames(classes.order, {
    [ classes.active ]: orderState.isOrderOpen,
  });

  return (
    <section className={openOrder}>
      {/* Order modal */}
      <div className={classes.orderModal}>
        {/* Order reset */}
        <div className={classes.orderReset}>
          <button className={classes.buttonReset}
            onClick={() => orderState.setIsOrderOpen(!orderState.isOrderOpen)}
          >
          </button>
        </div>
        {/* Modal */}
        <div className={classes.modal}>
          {/* Title */}
          <h3 className={classes.title}>Order a consultation</h3>
          {/* Form */}
          <form className={classes.form}>
            <label className={classes.field}>
              <input id="name" type="text" placeholder="Name" />
            </label>
            <label className={classes.field}>
              <input id="tel" type="tel" placeholder="Tel." />
            </label>
            <label className={classes.field}>
              <input id="email" type="email" placeholder="E-mail" />
            </label>
            <label className={classes.field}>
              <select className={classes.select}
                name="connection"
                id="connection"
                defaultValue={''}
              >
                <option value="">Connection</option>
                <option value="phone">Phone</option>
                <option value="email">E-mail</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="telegram">Telegram</option>
              </select>
            </label>
            <label className={classes.field}>
              <input
                name="privacy"
                type="checkbox"
                checked={privacyChecked}
                onChange={handlePrivacyChange}
              />
              <a href="#">Privacy policy</a>
            </label>
            <button type="submit" className={classes.submit}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
