import classes from './Footer.module.scss';
import { IconLogoFooter, IconDev } from 'shared/icons';
import { scrollToTop } from 'shared/utils';

/**
 * @typedef {import('./types').FooterProps} FooterProps
 */

/**
 * @function Footer
 * @param {FooterProps} props
 * @returns {JSX.Element}
 */

export const Footer = (props) => {

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        {/* columns */}
        <div className={classes.columns}>
          {props.details.columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className={classes.title}>{column.title.content}</h3>
              <div className={classes.links}>
                {column.links.map((link, linkIndex) => (
                  <div className={classes.item}
                    key={linkIndex}
                  >
                    {link.type === 'text' && (
                      <a href={link.url}>
                        {link.content}
                      </a>)
                    }
                    {link.type === 'email' && (
                      <a href={`mailto:${link.url}`}>
                        {link.content}
                      </a>)
                    }
                    {link.type === 'icon' && (
                      <a href={link.url}>
                        <img src={link.content}
                          alt='Icon'
                        />
                      </a>)
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* info */}
        <div className={classes.info}>
          <div>
            <button onClick={() => scrollToTop()}>
              <IconLogoFooter className={classes.logo} />
            </button>
            {props.details.texts.map((text, index) => (
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
