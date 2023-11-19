import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'assets/css/react-slick.css';
import 'rc-drawer/assets/index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
    // import("bootstrap/dist/js/bootstrap");
  }, []);  
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return <Component {...pageProps} />;
}
