import classes from './Download.module.scss';

/**
 * @typedef {import('./types').DownloadProps} DownloadProps
 */

/**
 * @function Download
 * @param {DownloadProps} props
 * @returns {JSX.Element}
 */

export const Download = (props) => {

  return (
    <section className={ classes.download }>
      <div className={ classes.wrapper }>
        <div className={ classes.textBlock }>
          <h1 className={ classes.title }>
            { props.details.title.content }
          </h1>
          { props.details.texts.map((text, index) => (
            <p className={ classes.text }
              key={index}
            >
              { text }
            </p>
          )) }
          <div className={ classes.links }>
            <a className={ classes.link }
              href={ props.details.links.apple.url }
            >
              <img src={ props.details.links.apple.icon }
                alt="Apple"
              />
            </a>
            <a className={ classes.link }
              href={ props.details.links.google.url }
            >
              <img src={ props.details.links.google.icon }
                alt="Google"
              />
            </a>
          </div>
        </div>
        <img className={ classes.image }
          src={ props.details.image.source }
          alt={ props.details.image.description }
        />
      </div>
    </section>
  );
};
