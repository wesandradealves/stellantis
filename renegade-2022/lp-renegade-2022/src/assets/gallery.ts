import {
  IncludePrefixResponsiveSizes,
  includeResponsive,
} from '@/utils/imagePrefixes';

const GALLERY_PREFIX = 'Gallery/';

interface VideoProps {
  desktop: string;
  mobile: string;
}

export interface GalleryAsset {
  id: string;
  title: string;
  alt: string;
  slug: string;
  asset: IncludePrefixResponsiveSizes;
  video?: VideoProps;
}

interface IGalleryFragment {
  [x: string]: Omit<GalleryAsset, 'id'>[];
}
interface IGallery {
  [x: string]: GalleryAsset[];
}

export const gallery = (): IGallery => {
  const items: IGalleryFragment = {
    sport: [
      {
        title: 'Fotos da versão sport 1',
        alt: 'Fotos da versão sport 1',
        slug: 'renegade-sport-1',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-estrada-45`,
          'jpg',
        ),
      },
      {
        title: 'Fotos da versão Sport 2',
        alt: 'Fotos da versão sport 2',
        slug: 'renegade-sport-2',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-badge-sport`,
          'jpg',
        ),
      },
      {
        title: 'Fotos da versão Sport 3',
        alt: 'Fotos da versão sport 3',
        slug: 'renegade-sport-3',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-45-cima`,
          'jpg',
        ),
      },
      {
        title: 'Fotos da versão Sport 4',
        alt: 'Fotos da versão sport 4',
        slug: 'renegade-sport-4',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-traseira`,
          'jpg',
        ),
      },
      {
        title: 'Fotos da versão Sport 5',
        alt: 'Fotos da versão sport 5',
        slug: 'renegade-sport-5',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-roda`,
          'jpg',
        ),
      },
      {
        title: 'Fotos da versão Sport 6',
        alt: 'Fotos da versão sport 6',
        slug: 'renegade-sport-6',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-45-parado`,
          'jpg',
        ),
      },

      {
        title: 'Fotos da versão Sport 7',
        alt: 'Fotos da versão sport 7',
        slug: 'renegade-sport-7',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-frente-estrada`,
          'jpg',
        ),
      },

      {
        title: 'Fotos da versão Sport 8',
        alt: 'Fotos da versão sport 8',
        slug: 'renegade-sport-8',
        asset: includeResponsive(
          `${GALLERY_PREFIX}sport/jeep-renegade-lado`,
          'jpg',
        ),
      },
    ],
    longitude: [
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Vista lateral do Jeep Renegade Longitude na cor preta em estrada com arbustos ao fundo.',
        slug: 'renegade-longitude-1',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-45-estrada`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Fotos da versão Longitude 2',
        slug: 'renegade-longitude-2',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-45-traseira-estrada`,
          'jpg',
        ),
      },

      {
        title: 'Jeep Renegade Longitude',
        alt: 'Vista de frente do Jeep Renegade Longitude na cor preta em fundo cinza.',
        slug: 'renegade-estilo',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-frente`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Fotos da versão Longitude 4',
        slug: 'renegade-lanterna',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-traseira`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Fotos da versão Longitude 5',
        slug: 'renegade-lateral',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-roda`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Vista de frente do Jeep Renegade Longitude na cor preta em estrada com arbustos ao fundo.',
        slug: 'renegade-perfil',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-frente-estrada`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Fotos da versão Longitude 7',
        slug: 'renegade-potencia',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-45-cima`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Longitude',
        alt: 'Fotos da versão Longitude 8',
        slug: 'renegade-performance',
        asset: includeResponsive(
          `${GALLERY_PREFIX}longitude/jeep-renegade-longitude-lateral`,
          'jpg',
        ),
      },
    ],
    'serie-s': [
      {
        title: 'Jeep Renegade Série S',
        alt: 'Vista lateral e traseira do Jeep Renegade série S na cor cinza em estrada de asfalto com em paisagem montanhosa com curso d’água ao fundo.',
        slug: 'renegade-serieS-1',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-lateral-strada`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Jeep Renegade série S na cor cinza visto de cima lateralmente em fundo cinza.',
        slug: 'renegade-serieS-2',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-45-cima`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Jeep Renegade série S na cor cinza visto de frente em fundo cinza.',
        slug: 'renegade-serieS-3',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-45`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Jeep Renegade série S na cor cinza visto de frente em fundo cinza.',
        slug: 'renegade-serieS-4',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-traseira`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Fotos da versão Serie-s 5',
        slug: 'renegade-serieS-5',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-roda`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Traseira e lateral do Jeep Renegade cinza em estrada curva com paisagem montanhosa.',
        slug: 'renegade-serieS-6',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-traseira-estrada`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Jeep Renegade série S na cor cinza visto de frente em estrada de asfalto com mar ao fundo e céu com nuvens.',
        slug: 'renegade-serieS-7',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-frente-strada`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Série S',
        alt: 'Vista lateral do Jeep Renegade série S na cor cinza em fundo cinza.',
        slug: 'renegade-serieS-8',
        asset: includeResponsive(
          `${GALLERY_PREFIX}serie-s/jeep-renegade-serie-s-lateral`,
          'jpg',
        ),
      },
    ],
    trailhawk: [
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Vista de lateral do Jeep Renegade Trailhawk na cor vermelha com listra preta em estrada de terra fazendo uma curva e levantando poeira.',
        slug: 'renegade-trailhawk-1',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-45-campo`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Vista de frente do Jeep Renegade Trailhawk na cor vermelha com listra preta na praia com mar e prédios ao fundo.',
        slug: 'renegade-trailhawk-2',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-frente-praia`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Vista traseira de Jeep Renegade Trailhawk na cor vermelha em solo arenoso com dunas ao fundo.',
        slug: 'renegade-trailhawk-3',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-traseira-praia`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Fotos da versão Trailhawk 4',
        slug: 'renegade-trailhawk-4',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-traseira`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Vista de cima do Jeep Renegade Trailhawk na cor vermelha com listra preta em fundo cinza.',
        slug: 'renegade-trailhawk-5',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-45-cima`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Vista de frente do Jeep Renegade Trailhawk na cor vermelha com listra preta em estrada de terra árida com cactos e grama seca.',
        slug: 'renegade-trailhawk-6',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-frente-campo`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Fotos da versão Trailhawk 7',
        slug: 'renegade-trailhawk-7',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-traseira-estrada`,
          'jpg',
        ),
      },
      {
        title: 'Jeep Renegade Trailhawk',
        alt: 'Vista lateral do Jeep Renegade Trailhawk na cor vermelha com listra preta na estrada com montanhas ao fundo.',
        slug: 'renegade-trailhawk-8',
        asset: includeResponsive(
          `${GALLERY_PREFIX}trailhawk/jeep-renegade-trailhawk-45-estrada`,
          'jpg',
        ),
      },
    ],
  };

  Object.keys(items).forEach((key) => {
    items[key] = items[key].map((item, index) => ({
      ...item,
      id: `${key}-${item.slug}-${index}`,
    }));
  });

  return items as IGallery;
};
interface IGalleryThumbs {
  [x: string]: (Omit<GalleryAsset, 'asset'> & {
    asset: string;
  })[];
}

export const galleryThumbs = (): IGalleryThumbs => {
  const thumbs: IGalleryThumbs = {};

  Object.keys(gallery()).forEach((key) => {
    thumbs[key] = gallery()[key]?.map((g) => ({
      id: `${key}-${g.slug}-thumb`,
      title: `${g.title}`,
      alt: `${g.alt}`,
      slug: g.slug,
      asset: `${g.asset.path}-thumb.jpg`,
    }));
  });

  return thumbs;
};

export const galleryThumbsMobile = (): IGalleryThumbs => {
  const thumbs: IGalleryThumbs = {};

  Object.keys(gallery()).forEach((key) => {
    thumbs[key] = gallery()[key]?.map((g) => ({
      id: `${key}-${g.slug}-thumb`,
      title: `${g.title}-thumb`,
      alt: `${g.alt}`,
      slug: g.slug,
      asset: `${g.asset.path}-thumb-mobile.jpg`,
    }));
  });

  return thumbs;
};

export interface ISelectedGalleryImage {
  [x: string]: GalleryAsset;
}

export const defaultSelectedGalleryImages =
  (): ISelectedGalleryImage => {
    const selectedGalleryImages: ISelectedGalleryImage = {};

    Object.keys(gallery()).forEach((key) => {
      const defaultImage = {
        ...gallery()[key][0],
        id: `${key}-${gallery()[key][0].slug}-main`,
      };
      selectedGalleryImages[key] = defaultImage;
    });

    return selectedGalleryImages;
  };
