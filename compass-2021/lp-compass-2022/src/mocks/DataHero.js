import * as images from '../assets';

const DataHero = [
  {
    id: 1,
    image: images.Stories.Desktop.Image01,
    imageMobile: images.Stories.Mobile.Image01,
    imageAlt: `Novo Compass Híbrido 2023.`,
    highlighted: true,
    description: { text: 'O 4X4 FICOU AINDA MAIS ELETRIZANTE' },
    head: {
      title: 'NOVO JEEP',
      titleAux: 'COMPASS 4XE',
      width: 200,
    },
    action: {
      text: 'Toque e veja as novidades',
      align: 'bottomright',
    },
  },
  {
    id: 2,
    image: images.Stories.Desktop.Image02,
    imageMobile: images.Stories.Mobile.Image02,
    imageAlt: 'Único 4x4 híbrido*',
    head: {
      title: 'Único 4x4 híbrido*',
      width: 370,
    },
    description: {
      text: `*O único dentre os SUV’s médios com um motor para cada eixo: a combustão na frente, com torque de 270 Nm, e elétrico atrás, com torque de 250 Nm. Essa combinação garante 240 CV de potência e uma aceleração de 0 a 100 km/h em 6.8s.`,
    },
  },
  {
    id: 3,
    image: images.Stories.Desktop.Image03,
    imageMobile: images.Stories.Mobile.Image03,
    imageAlt: 'Autonomia Inteligente',
    head: {
      title: 'Autonomia Inteligente',
      width: 370,
    },
    description: {
      text: 'No modo elétrico, o Compass 4xe garante até 44km de autonomia. Já no modo híbrido, até 927km. Ou seja, ao combinar os dois motores, você praticamente não precisa abastecer, pois o consuma fica em 25,4 km/L.',
    },
  },
  {
    id: 4,
    image: images.Stories.Desktop.Image04,
    imageMobile: images.Stories.Mobile.Image04,
    imageAlt: 'Atitude Ecofriendly',
    head: {
      title: 'Atitude Ecofriendly',
      width: 370,
    },

    description: {
      text: 'Com Compass 4xe, você se conecta com a natureza de forma extraordinária. Afinal, no modo híbrido você tem menos consumo de emissão de CO² e no modo full elétrico, zero poluição e maior silêncio nas suas aventuras.',
    },
  },
  {
    id: 5,
    image: images.Stories.Desktop.Image05,
    imageMobile: images.Stories.Mobile.Image05,
    imageAlt: 'Design Exclusivo',
    head: {
      title: 'Design Exclusivo',
      width: 370,
    },
    description: {
      text: 'Para quem gosta de exclusividade, esse carro é um prato cheio. Ele ganhou badges feitos sob medida, com bordas sombreadas em azul e novas cores que só essa versão tem: Azul Shade, Preto Solid, Branco Alpine e Prata Glacier.',
    },
  },
];

export default DataHero;
