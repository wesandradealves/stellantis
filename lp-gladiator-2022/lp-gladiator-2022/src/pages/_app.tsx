import {
  useEffect
} from 'react';
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import $ from 'jquery';
import "swiper/css";

function MyApp({ Component, pageProps }: AppProps) {
  const GA_TRACKING_ID = "GTM-P6RMWK6";

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GA_TRACKING_ID}`}
      />
      <Script strategy="afterInteractive" id="gtagScript">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
      <Script strategy="afterInteractive" id="handleTalk">
        {`
          window.ht = new HT({
            token: '35e4d8e605f76afdf8ac6af37efb065c',
            avatar: 'MAYA',
            opacity: 0,
            highContrast: true,
            mobileConfig: {
              align: 'top',
            },
          });
        `}
      </Script>      
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
