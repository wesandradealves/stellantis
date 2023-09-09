import { MetaType } from '@models/index';

export const PRODUCT_NAME = 'Renegade';
export const BRAND_NAME = 'Jeep';
export const PAGE_TITLE = `${BRAND_NAME} ${PRODUCT_NAME}`;

export const metaTags: MetaType = {
  description:
    'Viva uma nova aventura com o Novo Jeep Renegade. Sinta a força dos 185 cv de potência e a força do motor T270 e surpreenda-se. Confira mais detalhes!',
  title: 'Novo Jeep Renegade',
  brandName: 'Jeep',
  productName: 'Renegade',
  heading: 'Viva uma nova aventura com o Novo Jeep Renegade.',
  twitter: {
    card: 'summary',
    site: '@jeepbr',
    image: 'https://renegade.jeep.com.br/og-image.jpg',
  },
  url: 'https://renegade.jeep.com.br',
  image: 'https://renegade.jeep.com.br/og-image.jpg',
  imageAlt: 'Novo Jeep Renegade',
};

export const STORAGE_PREFIX = '@jeep-renegade/';

export const brandLinks = {
  mainUrl: 'https://www.jeep.com.br',
  privacyPolicy:
    'https://www.jeep.com.br/politica-de-privacidade.html',
  twitter: 'https://twitter.com/jeepbr',
  facebook: 'https://www.facebook.com/jeepbr',
  instagram: 'https://www.instagram.com/jeepbr/',
};

export * as menu from '../mocks/menu';
