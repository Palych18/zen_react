import './styles/index.scss';
import {
  useState,
  useEffect,
} from 'react';

import {
  Download,
  Warranty,
} from 'widgets';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const [ downloadDetails, setDownloadDetails ] = useState(null);
  const [ warrantyDetails, setWarrantyDetails ] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://zen-npw-default-rtdb.firebaseio.com/.json');
        const data = await response.json();
        if (!data) throw new Error('No data!');
        const { download, warranty } = data.en;
        setDownloadDetails(download);
        setWarrantyDetails(warranty);
      } catch (error) {
        const /** @type {*} */ { message } = error;
        console.error(message);
      };
    })();
  }, []);

  return (
    <div className="app">
      <div>
        {downloadDetails && (
          <Download details={downloadDetails} />
        )}
      </div>
      <div>
        {warrantyDetails && (
          <Warranty details={warrantyDetails}/>
        )}
      </div>
    </div>
  );
};
