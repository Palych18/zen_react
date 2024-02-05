import classes from './Footer.module.scss';
import { useData } from 'shared/hooks';
import { IconLogoFooter, IconDev } from 'shared/icons';
import { scrollToTop } from 'shared/utils';

/**
 * @function Footer
 * @returns {JSX.Element}
 */

export const Footer = () => {
  const dataState = useData();

  return (
    <footer className={classes.footer}>
      {/* Wrapper */}
      <div className={classes.wrapper}>
        {/* Columns */}
        <div className={classes.columns}>
          {dataState.data?.footer.columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              {/* TitleColumn */}
              <h3 className={classes.title}>{column.title.content}</h3>
              {/* LinksColumn */}
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
        {/* Info */}
        <div className={classes.info}>
          <div>
            {/* Logo */}
            <button onClick={() => scrollToTop()}>
              <IconLogoFooter className={classes.logo} />
            </button>
            {/* Texts */}
            {dataState.data?.footer.texts.map((text, index) => (
              <p className={classes.text}
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
          {/* IconDev */}
          <div className={classes.dev}>
            <IconDev className={classes.developer} />
          </div>
        </div>
      </div>
    </footer>
  );
};
