import { useState } from 'react';
import { useOpenOrder } from 'shared/hooks';
import { getClassNames } from 'shared/utils/index';
import classes from './Order.module.scss';

/**
 * @function Order
 * @returns {JSX.Element}
 */

export const Order = () => {
  const orderstate = useOpenOrder();

  const [ privacyChecked, setPrivacyChecked ] = useState(true);
  const handlePrivacyChange = () => {
    setPrivacyChecked(!privacyChecked);
  };

  const openOrder = getClassNames(classes.order, {
    [ classes.active ]: orderstate.isOrderOpen,
  });

  return (
    <section className={openOrder}>
      <div className={classes.orderModal}>
        <div className={classes.orderReset}>
          <button className={classes.buttonReset}
            onClick={() => orderstate.setIsOrderOpen(!orderstate.isOrderOpen)}
          >
          </button>
        </div>
        <div className={classes.modal}>
          <h3 className={classes.title}>Order a consultation</h3>
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
