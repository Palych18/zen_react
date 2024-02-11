import './styles/index.scss';
import { useEffect } from 'react';
import { useData, useLang, useTheme } from 'shared/hooks';
import { Header, Download, Warranty } from 'widgets';
import { Care, Cashback, Clients } from 'widgets';
import { ProgressBar } from 'features';
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
  const langState = useLang();
  const themeState = useTheme();

  useEffect(() => {
    dataState.getData(langState.lang);
  }, [ langState.lang ]);

  return (
    <div className={`app ${themeState.theme}`}>
      <ProgressBar />
      <Header />
      <Download />
      <Warranty />
      <Care />
      <Cashback />
      <Clients />
      <Footer />
    </div>
  );
};
