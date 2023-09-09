import sanitizeString from './sanitizeString';

const pushDataLayer = dataLayer => {
  if (dataLayer) {
    try {
      if (process.env.NODE_ENV === 'production') {
        window.dataLayer?.push(dataLayer);
      } else {
        console.log(dataLayer);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const baseDataLayer = {
  event: 'interaction',
  brand: 'jeep',
  segment: 'landing-page',
  product: 'compass',
  path: 'home',
};

const rawDataLayer = datalayer => ({
  ...baseDataLayer,
  ...datalayer,
});

const rawVpvDataLayer = dataLayer => ({
  ...baseDataLayer,
  event: 'vpv',
  ...dataLayer,
});

const clickEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'clique',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};
const playEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'play',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const changeEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'change',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const filledEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'preencheu',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const toggleEvent = (dataArgs, open) => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: open ? 'abrir' : 'fechar',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const openEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'abrir',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const closeEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'fechar',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const selectEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'selecao',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const clickMenuEvent = dataArgs => {
  const { path } = dataArgs;
  clickEvent({
    ...dataArgs,
    path: path ?? 'home',
  });
};

const clickSocialEvent = dataArgs => {
  const { path } = dataArgs;
  clickEvent({
    ...dataArgs,
    path: path ?? 'home',
  });
};

const swipeEvent = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      path: path ?? 'home',
      interactionType: 'swipe',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
    }),
  );
};

const vpv = dataArgs => {
  const { path } = dataArgs;
  pushDataLayer(
    rawVpvDataLayer({
      path: path ?? 'home',
      ...dataArgs,
    }),
  );
};

const NewDataLayer = {
  vpv,
  toggleEvent,
  changeEvent,
  closeEvent,
  swipeEvent,
  clickSocialEvent,
  clickMenuEvent,
  clickEvent,
  playEvent,
  rawDataLayer,
  selectEvent,
  filledEvent,
  openEvent,
};

export default NewDataLayer;
