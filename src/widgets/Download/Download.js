import './Download.scss';
import { getClassNames } from '../../shared/utils';

/**
 * @typedef {import('./types').DownloadProps} DownloadProps
 */

/**
 * @function Download
 * @param {DownloadProps} props
 * @returns {JSX.Element}
 */

export const Download = (props) => {

  const className = getClassNames(props.details.name);

  return (
    <section className={className}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}__text-block`}>
          <h1 className={`${className}__title`}>
            {props.details.title.content}
          </h1>
          {props.details.texts.map((text) => (
            <p className={`${className}__copy`}>{text}</p>
          ))}
          <div className={`${className}__links`}>
            <a className={`${className}__link`}
              href={props.details.links.apple.url}
            >
              <img src={props.details.links.apple.icon}
                alt="Apple"
              />
            </a>
            <a className={`${className}__link`}
              href={props.details.links.google.url}
            >
              <img src={props.details.links.google.icon}
                alt="Google"
              />
            </a>
          </div>
        </div>
        <div className={ `${className}__image-block` }>
          <img className={ `${className}__image` }
            src={ props.details.image.source }
            alt={ props.details.image.description }
          />
        </div>
      </div>
    </section>
  );
};
