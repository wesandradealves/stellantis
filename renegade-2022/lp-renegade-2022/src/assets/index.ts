import { WhatsappBtn } from '@/components';
import { dataVersions } from '@/mocks/versions';
import {
  FILE_PREFIX,
  IncludePrefix,
  includePrefix,
  IncludePrefixResponsiveSizes,
  includeResponsive,
  PREFIX,
} from '@/utils/imagePrefixes';
import * as Stories from './components';

const nav = {
  logoFiat: `${PREFIX}Nav/logoFiat.svg`,
};

const BRAND_PREFIX = `${PREFIX}brand/`;
const UI_PREFIX = `${PREFIX}ui/`;

const VERSION_PREFIX = '/images/Versions/';
const THUMB_DETAILS_PREFIX = `${VERSION_PREFIX}ThumbDetails/`;

const HERO_DESKTOP_PREFIX = 'HeroDesktop/';
const THUMB_PREFIX = `${HERO_DESKTOP_PREFIX}thumbs/`;
const BACKGROUNDS_PREFIX = `${HERO_DESKTOP_PREFIX}backgrounds/`;

const brand = {
  logoHeaderMobile: `${BRAND_PREFIX}logoHeaderMobile.svg`,
  // logoHeroDesktop: `${BRAND_PREFIX}heroLogo.svg`,
  logoNav: `${BRAND_PREFIX}heroLogo.svg`,
  brandImg: `${BRAND_PREFIX}brandImg.svg`,
  logoProduct: `${BRAND_PREFIX}logoJeep.svg`,
  logoFooter: `${BRAND_PREFIX}logoFooter.svg`,
  novoJeepRenegade: `${BRAND_PREFIX}novoJeepRenegade.svg`,
  globoRenegade: `${BRAND_PREFIX}globoRenegade.svg`,
  renegadeTop: `${BRAND_PREFIX}renegadeTop.svg`,
  whatsBtn: `${BRAND_PREFIX}whatsapp.svg`,
};

const imgCard = {
  imgCard: `${PREFIX}/HeroDesktop/imgCard/imgHero.jpg`,
};

const badge = {
  img: `${PREFIX}/HeroDesktop/badge/Selo-Melhor-Compra-2022.png`,
};

const ui = {
  menuClosed: `${UI_PREFIX}menuClosed.svg`,
  pointer: `${UI_PREFIX}pointer.png`,
  redArrowNext: `${UI_PREFIX}next-arrow-red.svg`,
  redArrowPrev: `${UI_PREFIX}prev-arrow-red.svg`,
  addCross: `${UI_PREFIX}addCross.svg`,
  accordionChevron: `${UI_PREFIX}accordionChevron.svg`,
  ibama: `${UI_PREFIX}ibama.svg`,
  logoJeepBrand: `${UI_PREFIX}logoJeepBrand.svg`,
};

//ITENS EXCLUIDOS
const heroContent = {
  // firstContent: `${HERO_DESKTOP_PREFIX}/firstContent.svg`,
  // subContent: `${HERO_DESKTOP_PREFIX}/subContent.svg`,
};



const backgroundVersions = `${VERSION_PREFIX}background/bg.svg`;

const heroImages = {
  //BACKGROUND HERO
  mainBg: includeResponsive(
    `${BACKGROUNDS_PREFIX}renegade-my23`,
    'jpg',

  ),
  secondContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}Longitude-Melhor-Compra-2022`,
    'jpg',
  ),
  thirdContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}renegade-iconicidade`,
    'jpg',
  ),
  fourthContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}renegade-perfomance`,
    'jpg',
  ),
  fifthContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}renegade-tecnologia`,
    'jpg',
  ),
  sixthContent: includeResponsive(
    `${BACKGROUNDS_PREFIX}renegade-seguranca`,
    'jpg',
  ),

  // firstContent: `${PREFIX}${THUMB_PREFIX}firstContent.svg`,
  // herobg: `${PREFIX}${BACKGROUNDS_PREFIX}herobg.jpg`,

  //THUMBS HERO
  thumbHero01: includeResponsive(
    `${THUMB_PREFIX}thumb-hero-05`,
    'jpg',
  ),

  //THUMBS HERO
  thumbHero02: includeResponsive(
    `${THUMB_PREFIX}thumb-hero-01`,
    'jpg',
  ),

  thumbHero03: includeResponsive(
    `${THUMB_PREFIX}thumb-hero-02`,
    'jpg',
  ),

  thumbHero04: includeResponsive(
    `${THUMB_PREFIX}thumb-hero-03`,
    'jpg',
  ),
  thumbHero05: includeResponsive(
    `${THUMB_PREFIX}thumb-hero-04`,
    'jpg',
  ),

  //Badge
  badge: includeResponsive(
    `${HERO_DESKTOP_PREFIX}Selo-Melhor-Compra-2022`,
    'png',
  ),

};

// ASSETS from cards details on versionsThumbs
export const thumbsDetails = [
  {
    sport: [`${THUMB_DETAILS_PREFIX}thumb-details-01.png`],
  },
  {
    image: `${THUMB_DETAILS_PREFIX}thumb-details-02.png`,
  },
];

// ASSETS FOR MainStories

const ReserveCTA = {
  backgroundImage: includeResponsive(
    'ReserveCTA/jeep-renegade-reserve',
    'jpg',
  ),
  backgroundImageMobile: includeResponsive(
    'ReserveCTA/reserv-bg',
    'jpg',
  ),
  cardImage: includeResponsive(
    'ReserveCTA/imgCard/reserveCard',
    'jpg',
  ),
};

interface ReducedVersions {
  [x: string]: IncludePrefixResponsiveSizes;
}
interface ReducedDetails {
  [x: string]: IncludePrefix;
}
interface ReducedVersionsThumbs {
  [x: string]: IncludePrefix;
}
interface ReducedVersionsLogos {
  [x: string]: IncludePrefix;
}

const versionsDetails = (versionName: string): ReducedDetails =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(
        `Versions/ThumbDetails/${c.id}/${versionName}`,
        'jpg',
      ),
    }),
    {},
  );

const versions = (): ReducedVersions =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includeResponsive(`Versions/${c.id}`, 'png'),
    }),
    {},
  );

const versionsThumbs = (): ReducedVersionsThumbs =>
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-thumb`, 'png'),
    }),
    {},
  );

  const versionsLogos = (): ReducedVersionsLogos => 
  dataVersions().reduce(
    (p, c) => ({
      ...p,
      [c.id]: includePrefix(`Versions/${c.id}-logo`, 'svg'),
    }), 
    {},
  );

const components = {
  Stories,
};

export * as productDetails from './productDetails';

const files = {
  accessoriesCatalogue: `${FILE_PREFIX}Catalogo-de-Acessorios-Renegade.pdf`,
};

export {
  brand,
  ui,
  components,
  heroContent,
  heroImages,
  backgroundVersions,
  versionsDetails,
  nav,
  files,
  ReserveCTA,
  versions,
  versionsLogos,
  versionsThumbs,
  imgCard,
  badge,
};
