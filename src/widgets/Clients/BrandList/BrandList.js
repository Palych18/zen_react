import classes from './BrandList.module.scss';

/**
 * @typedef {import('./types').BrandListProps} BrandListProps
 */

/**
 * @function BrandList
 * @param {BrandListProps} props
 * @returns {JSX.Element}
 */

export const BrandList = (props) => {
  return (
    <ul className={classes.brands}>
      {props.brands.map((brand) => (
        <li className={classes.brand}
          key={brand.source}
        >
          <img src={brand.source}
            alt={brand.description}
          />
        </li>
      ))}
    </ul>
  );
};
