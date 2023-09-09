import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

try {
  const addTrackingTag = (event) => {
    event.fingerprint = ["tracking-error"];
    const tags = event.tags ?? {};
    return { ...tags, 'thirdParty': 'tracking' };
  }

  Sentry.init({
    dsn: "https://3843709f62584493aad2854f6d707080@o211911.ingest.sentry.io/5986569",
    integrations: [new Integrations.BrowserTracing()],
    denyUrls: [
      /(^|^[^:]+:\/\/|[^\.]+\.)dcode\.works/i,
      /^file:\/\//i,
      /^extensions\//i,
      /^chrome:\/\//i,
      /^chrome-extension:\/\//i,
      /^moz-extension:\/\//i,
      /^dcode\.works/i,
      /^graph\.facebook\.com/i,
      /^connect\.facebook\.net\/en_US\/all\.js/i,
      ],
    beforeSend(event, hint) {
      const error = hint?.originalException;
      const matchRegex = /clarity|doubleclick|dbclick|google-analytics|googletagmanager|google|analytics|gtm/gi;
				
      if (String(error)?.match(matchRegex)) {
        event.tags = addTrackingTag(event);
      }

      if (event.breadcrumbs?.find((b) => matchRegex.test(b?.message ?? ''))) {
        event.tags = addTrackingTag(event);
      }
      if (event.stacktrace?.frames?.find((f) => matchRegex.test(f?.module ?? ''))) {
        event.tags = addTrackingTag(event);
      }
      return event;
    },
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.1,
  });
} catch (error) {
  console.log(error);
}

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <script>window.dataLayer = window.dataLayer || [];</script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P6RMWK6');`,
            }}
          ></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // Hotjar Tracking Code for https://mobi.fiat.com.br/
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2661604,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}}>
          </script>
          <meta name="theme-color" content="#EDEDE3" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />

          <link href="static/fonts/fonts.css" rel="stylesheet" />

          <script defer src="https://plugin.handtalk.me/web/latest/handtalk.min.js" />
        </Head>

        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6RMWK6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <div id="modal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
