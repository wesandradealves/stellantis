import { IModalContentMap, ISection1Images } from './types'

const currentSectionPath = `/static/images/section1`

export const section1Images: ISection1Images = {
  images: [
    {
      slides: [
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-1@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-1@2x.jpg`,
          size: 700,
        },
      ],
      thumbs: [
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-1@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-1@2x.jpg`,
          size: 700,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-1@2x.jpg`,
          size: 1300,
        },
      ],
    },
    {
      slides: [
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-2@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-2@2x.jpg`,
          size: 700,
        },
      ],
      thumbs: [
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-2@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-2@2x.jpg`,
          size: 700,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-2@2x.jpg`,
          size: 1300,
        },
      ],
    },
    {
      slides: [
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-3@2x.png`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-3@2x.png`,
          size: 700,
        },
      ],
      thumbs: [
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-3@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-3@2x.jpg`,
          size: 700,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-3@2x.jpg`,
          size: 1300,
        },
      ],
    },
    {
      slides: [
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-4@2x.png`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-4@2x.png`,
          size: 700,
        },
      ],
      thumbs: [
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-4@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-4@2x.jpg`,
          size: 700,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-4@2x.jpg`,
          size: 1300,
        },
      ],
    },
    {
      slides: [
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-5@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/slides/jeep-commander-destaques-5@2x.jpg`,
          size: 700,
        },
      ],
      thumbs: [
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-5@2x.jpg`,
          size: 0,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-5@2x.jpg`,
          size: 700,
        },
        {
          img: `${currentSectionPath}/thumbs/jeep-commander-destaques-5@2x.jpg`,
          size: 1300,
        },
      ],
    },
  ],
  heroes: {
    background: `${currentSectionPath}/hero-bg.jpg`,
    backgroundExtended: `${currentSectionPath}/hero-bg@2x.jpg`,
    car: `${currentSectionPath}/hero-car.png`,
    carExtended: `${currentSectionPath}/hero-car@2x.png`,
  },
}

export const modalContentMap: IModalContentMap = {
  sofisticacao: {
    id: 0,
    header: 'Sofisticação',
    infoList:
      'Detalhes verdadeiramente premium dentro e fora do Jeep Commander. Encantar-se com tamanha sofisticação é inevitável.',
    thumbnails: section1Images.images[0].thumbs,
    modalImg: section1Images.images[0].slides,
    alt: 'img1',
    title: 'title img1',
    getPrevious: () => null,
    getNext: () => modalContentMap.conforto,
  },
  conforto: {
    id: 1,
    header: 'Conforto e espaço interno',
    infoList:
      'O Jeep de quem quer ter mais espaço para suas aventuras, com 7 lugares, acabamento interno único, revestimento suave e confortável, rebatimento dos bancos traseiros e reclinação em todos os assentos.',
    thumbnails: section1Images.images[1].thumbs,
    modalImg: section1Images.images[1].slides,
    alt: 'img2',
    title: 'title img2',
    getPrevious: () => modalContentMap.sofisticacao,
    getNext: () => modalContentMap.design,
  },
  design: {
    id: 2,
    header: 'Design',
    infoList:
      'O Jeep Commander possui um design exclusivo, inspirado nas principais tendências premium, que carrega em seu DNA, a tradição dos melhores SUVs e o espírito de aventura da Jeep.',
    thumbnails: section1Images.images[2].thumbs,
    modalImg: section1Images.images[2].slides,
    alt: 'img3',
    title: 'title img3',
    getPrevious: () => modalContentMap.conforto,
    getNext: () => modalContentMap.torque,
  },
  torque: {
    id: 3,
    header: 'Torque e Potência',
    infoList:
      'Duas opções de motor e capacidade off-road para você encarar qualquer terreno com o estilo que só o Jeep Commander possui.',
    thumbnails: section1Images.images[3].thumbs,
    modalImg: section1Images.images[3].slides,
    alt: 'img4',
    title: 'title img4',
    getPrevious: () => modalContentMap.design,
    getNext: () => modalContentMap.conectividade,
  },
  conectividade: {
    id: 4,
    header: 'Conectividade',
    infoList:
      'Sofisticação até na hora de encarar os maiores obstáculos com o Adventure Intelligence do Jeep Commander, além de Alexa In Vehicle, setup remoto da navegação e muito mais.',
    thumbnails: section1Images.images[4].thumbs,
    modalImg: section1Images.images[4].slides,
    alt: 'img5',
    title: 'title img5',
    getPrevious: () => modalContentMap.torque,
    getNext: () => null,
  },
}
