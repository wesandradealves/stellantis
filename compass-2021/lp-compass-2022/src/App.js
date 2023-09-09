import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import configData from './components/Track/data';
import { DataLayer } from './components/Track/DataLayer/DataLayer';
import NewDataLayer from './NewTrack/NewDataLayer';
import Routes from './routes';
import GlobalStyle from './styles/global';

try {
  const addTrackingTag = event => {
    // eslint-disable-next-line no-param-reassign
    event.fingerprint = ['tracking-error'];
    const tags = event.tags ?? {};
    return { ...tags, thirdParty: 'tracking' };
  };

  Sentry.init({
    dsn: 'https://410c3c9b22e74d149079934f209b71ab@o211911.ingest.sentry.io/6293729',
    integrations: [new Integrations.BrowserTracing()],
    denyUrls: [
      // eslint-disable-next-line no-useless-escape
      /(^|^[^:]+:\/\/|[^\.]+\.)dcode\.works/i,
      /^file:\/\//i,
      /^extensions\//i,
      /^chrome:\/\//i,
      /^chrome-extension:\/\//i,
      /^moz-extension:\/\//i,
      /^graph\.facebook\.com/i,
      /^connect\.facebook\.net\/en_US\/all\.js/i,
    ],
    beforeSend(event, hint) {
      const error = hint?.originalException;
      const matchRegex =
        /clarity|doubleclick|dbclick|google-analytics|googletagmanager|google|analytics|gtm/gi;

      if (error?.message?.match(matchRegex)) {
        // eslint-disable-next-line no-param-reassign
        event.tags = addTrackingTag(event);
      }

      if (
        event?.breadcrumbs?.find(b =>
          matchRegex.test(b?.message ?? ''),
        )
      ) {
        // eslint-disable-next-line no-param-reassign
        event.tags = addTrackingTag(event);
      }

      if (
        event.stacktrace?.frames?.find(f =>
          matchRegex.test(f?.module ?? ''),
        )
      ) {
        // eslint-disable-next-line no-param-reassign
        event.tags = addTrackingTag(event);
      }
      return event;
    },
    tracesSampleRate: 0.1,
  });
} catch (error) {
  Sentry.captureException(error);
}

const propTypes = {
  data: PropTypes.object,
};

const defaultProps = {
  data: configData,
};
window.$ = require('jquery');

const App = ({ mobile, data: info, ...props }) => {
  React.useLayoutEffect(() => {
    DataLayer.init(info.tracks.data);
  }, []);
  const newDataLayer = NewDataLayer;

  useEffect(() => {
    if ($) {
      const next = '.swiper-button-next';
      const prev = '.swiper-button-prev';
      $(`#compass-2022 > ${next}`).click(e => {
        DataLayer.push(
          'Conteudo_ClicouNext',
          'compass-4xe',
          'proximo',
          'theme',
        );
      });
      $(`#compass-2022 > ${prev}`).click(e => {
        DataLayer.push(
          'Conteudo_ClicouPrev',
          'compass-4xe',
          'anterior',
          'theme',
        );
      });
      $(`#services .swiper-button-next`).click(e => {
        DataLayer.push(
          'Conteudo_ClicouNextServices',
          'design-interior',
          $('#services .swiper-slide-active .titleSubtitle')
            .text()
            .replace(/\s/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
        );
      });

      $(`#services ${prev}`).click(e => {
        DataLayer.push(
          'Conteudo_ClicouPrev',
          'design-interior',
          $('#services .swiper-slide-active .titleSubtitle')
            .text()
            .replace(/\s/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
        );
      });
    }
  }, [$]);

  return (
    <>
      <GlobalStyle />

      <Routes />
    </>
  );
};

App.displayName = 'App';
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default React.memo(App);
