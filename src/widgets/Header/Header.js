import classes from './Header.module.scss';
import { useState } from 'react';
import { useData, useLang, useTheme } from 'shared/hooks';
import { scrollToTop, scrollToTarget } from 'shared/utils';
import { getClassNames } from 'shared/utils';
import { IconLogo, IconMoon, IconSun } from 'shared/icons';

/**
 * @function Header
 * @returns {null | JSX.Element}
 */

export const Header = () => {
  const dataState = useData();
  const langState = useLang();
  const themeState = useTheme();

  if (!dataState.data?.header) return null;

  const [ isBurgerActive, setIsBurgerActive ] = useState(false);

  const headerClassNames = getClassNames(classes.header, {
    [ classes.dark ]: themeState.theme === 'dark',
  });

  const menuClassNames = getClassNames(classes.menu, {
    [ classes.active ]: isBurgerActive,
    [ classes.dark ]: themeState.theme === 'dark',
  });

  const burgerClassNames = getClassNames(classes.burger, {
    [ classes.active ]: isBurgerActive,
  });

  /** @type {(target: string) => void} */
  const onNavItemClick = (target) => {
    const targetId = document.getElementById(target);
    scrollToTarget(targetId);
    setIsBurgerActive(false);
  };

  if (!dataState.data) return null;

  return (
    <header className={headerClassNames}>
      {/* wrapper */}
      <div className={classes.wrapper}>
        {/* logo */}
        <button className={classes.logo}
          onClick={() => scrollToTop()}
        >
          <IconLogo />
        </button>
        {/* navigation */}
        <nav className={classes.nav}>
          <ul className={menuClassNames}>
            {dataState.data.header.nav.map((navItem) => (
              <li className={classes.item}
                key={navItem.target}
              >
                <a onClick={() => onNavItemClick(navItem.target)}>
                  {navItem.content}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* actions */}
        <div className={classes.actions}>
          {/* lang */}
          <select className={classes.lang}
            value={langState.lang}
            onChange={({ target: { value } }) => langState.setLang(value)}
          >
            {dataState.data.header.langs.map((lang) => (
              <option key={lang.key} value={lang.key}>
                {lang.name}
              </option>
            ))}
          </select>
          {/* theme */}
          <button className={classes.theme}
            onClick={() => themeState.toggleTheme()}
          >
            {themeState.theme === 'light' ? <IconMoon /> : <IconSun />}
          </button>
          {/* burger */}
          <button className={burgerClassNames}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
