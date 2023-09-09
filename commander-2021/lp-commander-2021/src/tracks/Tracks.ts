import TagManager from 'react-gtm-module';

export const tagManagerArgs = props => {
  const dataLayer = { dataLayer: props };

  return TagManager.dataLayer(dataLayer);
};
