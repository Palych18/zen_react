import classes from './Clients.module.scss';

/**
 * @typedef {import('./types').ClientsProps} ClientsProps
 */

/**
 * @function Clients
 * @param {ClientsProps} props
 * @returns {JSX.Element}
 */

export const Clients = (props) => {
  const themeBrands = props.theme === 'light' ? props.details.brands.light : props.details.brands.dark;

  return (
    <section className={ classes.clients }>
      <ul className={ classes.brands }>
        { themeBrands.map((brand, index) => (
          <li className={ classes.brand }
            key={index}
          >
            <img src={ brand.source }
              alt={ brand.description }
            />
          </li>
        )) }
      </ul>
    </section>
  );
};
