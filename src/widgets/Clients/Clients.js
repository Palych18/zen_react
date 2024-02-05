import classes from './Clients.module.scss';
import { useData } from 'shared/hooks';
import { BrandList } from './BrandList';

/**
 * @function Clients
 * @returns {null | JSX.Element}
 */

export const Clients = () => {
  const dataState = useData();

  return (
    <section className={classes.clients}
      id={dataState.data?.clients.name}
    >
      <BrandList />
    </section>
  );
};
