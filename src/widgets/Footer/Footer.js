import classes from './Footer.module.scss';
import { IconLogoFooter, IconDev } from 'shared/icons';
import { scrollToTop } from 'shared/utils';

/**
 * @typedef {import('./types').FooterProps} FooterProps
 */

/**
 * @param {FooterProps} props
 * @returns {JSX.Element}
 */

export const Footer = (props) => {
  const { details } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        {/* columns */}
        <div className={classes.columns}>
        </div>
        {/* info */}
        <div className={classes.info}>
          <div>
            <button onClick={() => scrollToTop()}>
              <IconLogoFooter className={classes.logo} />
            </button>
            {details.texts.map((text, index) => (
              <p className={classes.text}
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
          <div className={classes.dev}>
            <IconDev className={classes.developer} />
          </div>
        </div>
      </div>
    </footer>
  );
};
