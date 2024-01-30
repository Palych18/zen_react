import classes from './Download.module.scss';

import { useData } from 'shared/hooks/useData';

/**
 * @typedef {import('./types').DownloadProps} DownloadProps
 */

/**
 * @function Download
 * @param {DownloadProps} props
 * @returns {null | JSX.Element}
 */

export const Download = (props) => {
  const dataState = useData();

  return (
    <section className={classes.download}
      id={dataState.data?.download.name}
    >
      <div className={classes.wrapper}>
        <div className={classes.textBlock}>
          <h1 className={classes.title}>
            {dataState.data?.download.title.content}
          </h1>
          {dataState.data?.download.texts.map((text, index) => (
            <p className={classes.text}
              key={index}
            >
              {text}
            </p>
          ))}
          <div className={classes.links}>
            <a className={classes.link}
              href={dataState.data?.download.links.apple.url}
            >
              <img src={dataState.data?.download.links.apple.icon}
                alt="Apple"
              />
            </a>
            <a className={classes.link}
              href={dataState.data?.download.links.google.url}
            >
              <img src={dataState.data?.download.links.google.icon}
                alt="Google"
              />
            </a>
          </div>
        </div>
        <img className={classes.image}
          src={dataState.data?.download.image.source}
          alt={dataState.data?.download.image.description}
        />
      </div>
    </section>
  );
};
