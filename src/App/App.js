import './styles/index.scss';
import { useState, useEffect } from 'react';
import { useData } from 'shared/hooks';
import { Header, Download, Warranty } from 'widgets';
import { Care, Cashback, Clients } from 'widgets';
import { Footer } from 'widgets';

/**
 * @typedef {import('./types').DataFromAPI} DataFromAPI
 * @typedef {import('./types').SetDataFromAPI} SetDataFromAPI
 */

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const dataState = useData();
  const [ lang, setLang ] = useState('en');
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    const themeValue = theme === 'dark'
      ? 'light'
      : 'dark';
    setTheme(themeValue);
  };

  useEffect(() => {
    dataState.getData(lang);
  }, [ lang ]);

  return (
    <div className={`app ${theme}`}>
      {dataState.data?.header && (
        <Header details={dataState.data.header}
          langState={{ lang, setLang }}
          themeState={{ theme, toggleTheme }}
        />
      )}
      {dataState.data?.download && (
        <Download
          details={dataState.data.download}
        />
      )}
      {dataState.data?.warranty && (
        <Warranty
          details={dataState.data.warranty}
        />
      )}
      {dataState.data?.care && (
        <Care
          details={dataState.data.care}
        />
      )}
      {dataState.data?.cashback && (
        <Cashback
          details={dataState.data.cashback}
          theme={theme}
        />
      )}
      {dataState.data?.clients && (
        <Clients
          details={dataState.data.clients}
          theme={theme}
        />
      )}
      {dataState.data?.footer && (
        <Footer details={dataState.data.footer} />
      )}
    </div>
  );
};
