import classes from './Order.module.scss';

export const Order = () => {

  return (
    <section className={classes.order}>
      <div className={classes.orderReset}>
        <button className={classes.buttonReset}></button>
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
            <input id="privacy" checked type="checkbox" name="privacy" />
            <a href="#">Privacy policy</a>
          </label>
          <button type="submit" className={classes.submit}>Submit</button>
        </form>
      </div>
    </section>
  );
};
