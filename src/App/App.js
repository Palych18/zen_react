import './App.scss';
import { Download } from '../widgets';
import { useState, useEffect } from 'react';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const [ downloadDetails, setDownloadDetails ] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://zen-npw-default-rtdb.firebaseio.com/.json');
        const data = await response.json();
        if (!data) throw new Error('No data!');
        const { download } = data.en;
        setDownloadDetails(download);
      } catch (error) {
        const /** @type {*} */ { message } = error;
        console.error(message);
      };
    })();
  }, []);

  return (
    <div className="App">
      {downloadDetails && (
        <Download details={downloadDetails} />
      )}
    </div>
  );
};
