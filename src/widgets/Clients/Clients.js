import classes from './Clients.module.scss';
import { useData } from 'shared/hooks';
import { BrandList } from './BrandList';

/**
 * @typedef {import('./types').ClientsProps} ClientsProps
 */

/**
 * @function Clients
 * @param {ClientsProps} props
 * @returns {null | JSX.Element}
 */

export const Clients = (props) => {
  const dataState = useData();

  return (
    <section className={classes.clients}
      id={dataState.data?.clients.name}
    >
      <BrandList />
    </section>
  );
};
