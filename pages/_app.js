import '/styles/globals.css';
import '/styles/bootstrap.min.css';

import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axiosConfig from '../axiosConfig';
import GlobalState from '/GlobalState';

function App({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [router.query]);

  useEffect(() => {
    document.querySelector('body').style.overflow = loading ? 'hidden' : null;
    document.querySelector('html').style.overflow = loading ? 'hidden' : null;
  }, [loading]);


  axiosConfig();

  useEffect(() => {
    // You can make authenticated API requests here using axiosConfig
    axiosConfig.get('')
      .then(response => {
        console.log(response.data); // Handle the response data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {loading &&
        <div className='loader-bg'>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      }
      <GlobalState.Provider value={{

      }} >
        <Component {...pageProps} />
      </GlobalState.Provider>
    </>
  )
}

App.getInitialProps = async () => {
  axiosConfig();

  return {
  }
}

export default App