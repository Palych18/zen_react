import classes from './Download.module.scss';
import { useData } from 'shared/hooks';

/**
 * @function Download
 * @returns {null | JSX.Element}
 */

export const Download = () => {
  const dataState = useData();

  if (!dataState.data?.download) return null;

  return (
    <section className={classes.download}
      id={dataState.data?.download.name}
    >
      {/* Wrapper */}
      <div className={classes.wrapper}>
        {/* TextBlock */}
        <div className={classes.textBlock}>
          {/* Title */}
          <h1 className={classes.title}>
            {dataState.data?.download.title.content}
          </h1>
          {/* Texts */}
          {dataState.data?.download.texts.map((text, index) => (
            <p className={classes.text}
              key={index}
            >
              {text}
            </p>
          ))}
          {/* Links */}
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
        {/* PreviewBlock */}
        <button className={classes.preview}>
          <img
            src={dataState.data?.download.image.source}
            alt={dataState.data?.download.image.description}
          />
        </button>
      </div>
    </section>
  );
};
