import './styles/index.scss';
import { useState, useEffect, useRef } from 'react';
import { Header, Download, Warranty } from 'widgets';
import { Care, Cashback, Clients } from 'widgets';
import { Footer } from 'widgets';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const [ headerDetails, setHeaderDetails ] = useState(null);
  const [ downloadDetails, setDownloadDetails ] = useState(null);
  const [ warrantyDetails, setWarrantyDetails ] = useState(null);
  const [ careDetails, setCareDetails ] = useState(null);
  const [ cashbackDetails, setCashbackDetails ] = useState(null);
  const [ clientsDetails, setClientsDetails ] = useState(null);
  const [ footerDetails, setFooterDetails ] = useState(null);
  const [ theme, setTheme ] = useState('light');
  const [ lang, setLang ] = useState('en');

  const downloadSectionRef = useRef(null);
  const warrantySectionRef = useRef(null);
  const careSectionRef = useRef(null);
  const cashbackSectionRef = useRef(null);
  const clientsSectionRef = useRef(null);

  const toggleTheme = () => {
    const themeValue = theme === 'dark'
      ? 'light'
      : 'dark';
    setTheme(themeValue);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://zen-npw-default-rtdb.firebaseio.com/.json');
        const data = await response.json();

        if (!data) throw new Error('No data!');
        setHeaderDetails(data[ lang ].header);
        setDownloadDetails(data[ lang ].download);
        setWarrantyDetails(data[ lang ].warranty);
        setCareDetails(data[ lang ].care);
        setCashbackDetails(data[ lang ].cashback);
        setClientsDetails(data[ lang ].clients);
        setFooterDetails(data[ lang ].footer);
      } catch (error) {
        const /** @type {*} */ { message } = error;
        console.error(message);
      };
    })();
  }, [ lang ]);

  return (
    <div className={`app ${theme}`}>
      {headerDetails && (
        <Header details={headerDetails}
          langState={{ lang, setLang }}
          themeState={{ theme, toggleTheme }}
        />
      )}
      {downloadDetails && (
        <Download
          details={downloadDetails}
        />
      )}
      {warrantyDetails && (
        <Warranty
          details={warrantyDetails}
        />
      )}
      {careDetails && (
        <Care
          details={careDetails}
        />
      )}
      {cashbackDetails && (
        <Cashback
          details={cashbackDetails}
          theme={theme}
        />
      )}
      {clientsDetails && (
        <Clients
          details={clientsDetails}
          theme={theme}
        />
      )}
      {footerDetails && (
        <Footer details={footerDetails} />
      )}
    </div>
  );
};
