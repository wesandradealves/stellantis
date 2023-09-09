import { MenuCTAs, MenuLabel } from '@/models';
import productDetails, { ProductTab } from './productDetails';

export const PRODUCT_DETAILS_PREFIX = 'tudo-do-renegade';

export const PRODUCT_DETAILS_REF: MenuLabel = {
  id: 'data-menu-details-renegade',
  label: 'Tudo sobre o Renegade',
  slug: PRODUCT_DETAILS_PREFIX,
  url: `/${PRODUCT_DETAILS_PREFIX}`,
  hasChildren: true,
};

export const getProductDetails = (
  pDetails: ProductTab[],
): MenuLabel[] => {
  if (!pDetails) {
    return [];
  }
  return pDetails.reduce((prev, item) => {
    return [
      ...prev,
      {
        id: `data-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${PRODUCT_DETAILS_PREFIX}/${item.slug}`,
        prefixRelation: PRODUCT_DETAILS_REF,
      },
    ];
  }, [] as MenuLabel[]);
};

export const links = {
  reserve: 'https://www.jeep.com.br/solicite.html',
  reserveVersion: 'https://www.jeep.com.br/solicite.html',
  financiamento: 'https://renegade.jeep.com.br/monte.html#versao',
  monte: 'https://renegade.jeep.com.br/monte.html#versao',
  concessionarias:
    'https://www.jeep.com.br/concessionarias.html',
  whatsapp:
    'https://api.whatsapp.com/message/5V6JWPFJIUMMN1?autoload=1&app_absent=0',
};

export const RESERVE_TITLE = 'Reserve o seu';
export const COMPRE_TITLE = 'Compre o seu';
export const FINANCIAMENTO_TITLE = 'Simule um financiamento';
export const MONTE_TITLE = 'Monte o seu';
export const CONCESSIONARIAS_TITLE = 'Concessionárias ';

export const dataMenuLabel: () => MenuLabel[] = () => [
  {
    id: 'datamenu-0',
    label: 'Novo Renegade',
    url: '/',
    slug: '',
  },
  {
    id: 'datamenu-1',
    label: 'Série S',
    url: '/',
    slug: 'serie-s',
  },
  {
    id: 'datamenu-2',
    label: 'Versões',
    url: '/',
    slug: 'versoes',
  },
  {
    id: 'datamenu-3',
    label: 'Galeria',
    url: '/',
    slug: 'fotos',
  },
  ...getProductDetails(productDetails),
];

export const dataMenuButtons: MenuCTAs[] = [
  {
    id: 'datamenubutton-1',
    label: COMPRE_TITLE,
    url: links.reserve,
  },
  {
    id: 'datamenubutton-2',
    label: FINANCIAMENTO_TITLE,
    url: links.financiamento,
  },
  {
    id: 'datamenubutton-3',
    label: MONTE_TITLE,
    url: links.monte,
  },
  {
    id: 'datamenubutton-4',
    label: CONCESSIONARIAS_TITLE,
    url: links.concessionarias,
  },
  // {
  //   id: 'datamenubutton-5',
  //   label: '  Fale Conosco',
  //   url: links.whatsapp,
  //   iconCode: '',
  // },
];
