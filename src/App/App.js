import './styles/index.scss';
import {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  Header,
  Download,
  Warranty,
  Care,
  Cashback,
  Clients,
} from 'widgets';

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
  const [ theme, setTheme ] = useState('light');
  const [ langs, setLangs ] = useState('EN');

  const downloadSectionRef = useRef(null);
  const warrantySectionRef = useRef(null);
  const careSectionRef = useRef(null);
  const cashbackSectionRef = useRef(null);
  const clientsSectionRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://zen-npw-default-rtdb.firebaseio.com/.json');
        const data = await response.json();
        const { en, ru } = data;

        let langApp;
        if (langs === 'EN') langApp = en;
        if (langs === 'RU') langApp = ru;

        if (!data) throw new Error('No data!');
        setHeaderDetails(langApp.header);
        setDownloadDetails(langApp.download);
        setWarrantyDetails(langApp.warranty);
        setCareDetails(langApp.care);
        setCashbackDetails(langApp.cashback);
        setClientsDetails(langApp.clients);
      } catch (error) {
        const /** @type {*} */ { message } = error;
        console.error(message);
      };
    })();
  }, [ langs ]);

  return (
    <div className={ `app ${theme}` }>
      { headerDetails && (
        <Header details={ headerDetails }
          langsDetails={ { langs, setLangs } }
          themeDetails={ { theme, setTheme } }
        />
      ) }
      { downloadDetails && (
        <Download
          details={ downloadDetails }
        />
      ) }
      { warrantyDetails && (
        <Warranty
          details={ warrantyDetails }
        />
      ) }
      { careDetails && (
        <Care
          details={ careDetails }
        />
      ) }
      {cashbackDetails && (
        <Cashback
          details={cashbackDetails}
          theme={theme}
        />
      )}
      { clientsDetails && (
        <Clients
          details={ clientsDetails }
          theme={ theme }
        />
      ) }
    </div>
  );
};
