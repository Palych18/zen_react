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
      {/* {downloadDetails && (
        <Download
          details={downloadDetails}
        />
      )} */}
      {/* {warrantyDetails && (
        <Warranty
          details={warrantyDetails}
        />
      )} */}
      {/* {careDetails && (
        <Care
          details={careDetails}
        />
      )} */}
      {/* {cashbackDetails && (
        <Cashback
          details={cashbackDetails}
          theme={theme}
        />
      )} */}
      {/* {clientsDetails && (
        <Clients
          details={clientsDetails}
          theme={theme}
        />
      )} */}
      {/* {footerDetails && (
        <Footer details={footerDetails} />
      )} */}
    </div>
  );
};
