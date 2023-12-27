import { useState } from 'react';
import { getClassNames } from 'shared/utils';
import classes from './Header.module.scss';
import {
  IconLogo,
  IconMoon,
  IconSun,
} from 'shared/icons';

/**
 * @typedef {import('./types').HeaderProps} HeaderProps
 */

/**
 * @function Header
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

export const Header = (props) => {

  const { theme, setTheme } = props.themeDetails;
  const { langs, setLangs } = props.langsDetails;
  const [ eventBurger, setActiveBurger ] = useState('noActive');

  const headerClassNames = getClassNames(classes.header, {
    [ classes.dark ]: theme === 'dark',
  });

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMenuItemClick = () => {
  };

  /**
  * @typedef {import('react').SyntheticEvent} Event
  */

  /**
     * @function handleLangChange
     * @param {Event & {target: HTMLSelectElement}} event
     * @returns {void}
  */

  const handleLangChange = (event) => setLangs(event.target.value);

  const handleThemeClick = () => {
    const newTheme = theme === 'light'
      ? 'dark'
      : 'light';
    setTheme(newTheme);
  };

  const handleBurgerClick = () => {
    const newStateBurger = eventBurger === 'noActive'
      ? 'active'
      : 'noActive';
    setActiveBurger(newStateBurger);
  };

  const menuClassName = getClassNames(classes.menu, {
    [ classes.active ]: eventBurger === 'active',
    [ classes.dark ]: theme === 'dark',
  });
  const burgerClassName = getClassNames(classes.burger, {
    [ classes.active ]: eventBurger === 'active',
  });


  return (
    <header className={ headerClassNames }>
      {/* wrapper */ }
      <div className={ classes.wrapper }>
        {/* logo */ }
        <button className={ classes.logo }
          onClick={ handleLogoClick }
        >
          <IconLogo className={ classes.icon } />
        </button>
        {/* navigation */ }
        <nav className={ classes.nav }>
          <ul className={ menuClassName }>
            {props.details.nav.map((navItem) => (
              <li className={ classes.item }
                key={ navItem.target }
              >
                <button onClick={ handleMenuItemClick }>
                  { navItem.content }
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* actions */ }
        <div className={ classes.actions }>
          {/* lang */ }
          <select className={ classes.lang }
            value={ langs }
            onChange={ handleLangChange }
          >
            { props.details.langs.map((lang) => (
              <option key={lang.key} value={ lang.name }>
                { lang.name }
              </option>
            )) }
          </select>
          {/* theme */ }
          <button className={ classes.theme }
            onClick={ handleThemeClick }
          >
            { theme === 'light'
              ? <IconMoon className={ classes.icon } />
              : <IconSun className={ classes.icon } />
            }
          </button>
          {/* burger */ }
          <button className={ burgerClassName }
            onClick={ handleBurgerClick }
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
