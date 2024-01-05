import classes from './Header.module.scss';
import { useState } from 'react';
import { scrollToTop, scrollToTarget } from 'shared/utils';
import { getClassNames } from 'shared/utils';
import { IconLogo, IconMoon, IconSun } from 'shared/icons';

/**
 * @typedef {import('./types').HeaderProps} HeaderProps
 */

/**
 * @function Header
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

export const Header = (props) => {
  const { theme, toggleTheme } = props.themeState;
  const { lang, setLang } = props.langState;
  const [ isBurgerActive, setIsBurgerActive ] = useState(false);

  const headerClassNames = getClassNames(classes.header, {
    [ classes.dark ]: theme === 'dark',
  });

  const menuClassNames = getClassNames(classes.menu, {
    [ classes.active ]: isBurgerActive,
    [ classes.dark ]: theme === 'dark',
  });

  const burgerClassNames = getClassNames(classes.burger, {
    [ classes.active ]: isBurgerActive,
  });

  /** @type {(target: string) => void} */
  const onNavItemClick = (target) => {
    scrollToTarget(target);
    setIsBurgerActive(false);
  };

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
            {props.details.nav.map((navItem) => (
              <li className={classes.item}
                key={navItem.target}
              >
                <a onClick={() => onNavItemClick(navItem.target)}
                  href={`#${navItem.target}`}
                >
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
            value={lang}
            onChange={({ target: { value } }) => setLang(value)}
          >
            {props.details.langs.map((lang) => (
              <option key={lang.key} value={lang.key}>
                {lang.name}
              </option>
            ))}
          </select>
          {/* theme */}
          <button className={classes.theme}
            onClick={() => toggleTheme()}
          >
            {theme === 'light' ? <IconMoon /> : <IconSun />}
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
