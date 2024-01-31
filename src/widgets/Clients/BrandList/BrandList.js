import classes from './BrandList.module.scss';
import { useData, useTheme } from 'shared/hooks';

/**
 * @function BrandList
 * @returns {null | JSX.Element}
 */

export const BrandList = () => {
  const dataState = useData();
  const themeState = useTheme();

  const themeBrands = themeState.theme === 'light'
    ? dataState.data?.clients.brands.light
    : dataState.data?.clients.brands.dark;

  return (
    <ul className={classes.brands}>
      {themeBrands && themeBrands.map((brand) => (
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
