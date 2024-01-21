import classes from './Clients.module.scss';
import { BrandList } from './BrandList';

/**
 * @typedef {import('./types').ClientsProps} ClientsProps
 */

/**
 * @function Clients
 * @param {ClientsProps} props
 * @returns {JSX.Element}
 */

export const Clients = (props) => {
  const themeBrands = props.theme === 'light'
    ? props.details.brands.light
    : props.details.brands.dark;

  return (
    <section className={classes.clients}
      id={props.details.name}
    >
      <BrandList
        brands={themeBrands}
      />
    </section>
  );
};
