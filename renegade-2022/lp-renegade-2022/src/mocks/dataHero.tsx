import { heroImages } from '@/assets';
import { IncludePrefixResponsiveSizes, VideoResponsive } from '@/utils/imagePrefixes';

interface IHero {
  id: string;
  title: string;
  title2: string;
  description: string | JSX.Element;
  src?: VideoResponsive;
  cardSrc: IncludePrefixResponsiveSizes;
}

export const dataHero: IHero[] = [
  {
    id: '1-data-hero',

    title: 'Melhor Compra 2022',
    title2: '',
    description: (
      <>
        O carro off-road com o motor mais potente
        da categoria superou mais um desafio: o novo
        Jeep Renegade Longitude T270 Turbo Flex acaba
        de ser eleito a Melhor Compra de 2022, pela
        revista Quatro Rodas. São 185 cv para desbravar
        todos os terrenos e prêmios.
      </>
    ),
    cardSrc: heroImages.thumbHero01,
  },
  {
    id: '2-data-hero',
    title: 'DNA Jeep',
    title2: '',
    description: (
      <>
        Um ícone não muda, ele evolui. Além de estar mais
        robusto, eficaz e versátil, o novo Renegade traz design
        frontal e traseiro renovado, com faróis e lanternas Full
        Led em todas as versões.
      </>
    ),
    cardSrc: heroImages.thumbHero02,
  },
  {
    id: '3-data-hero',
    title: 'Performance',
    title2: '',
    description: (
      <>
        O destaque vai para o novo motor Turboflex T270, que
        garante ao novo Renegade uma performance inconfundível,
        com respostas mais rápidas e menor esforço. 185 cavalos
        de potência nas suas próximas aventuras.
      </>
    ),
    cardSrc: heroImages.thumbHero03,
  },
  {
    id: '4-data-hero',
    title: 'Tecnologias  Autônomas',
    title2: '',
    description: (
      <>
        A experiência Jeep Renegade está mais segura e inteligente. As
        tecnologias autônomas, como frenagem de emergência e monitoramento de
        ponto cego, trabalham automaticamente para oferecer uma navegação ainda
        mais tranquila.
      </>
    ),
    cardSrc: heroImages.thumbHero04,
  },
  {
    id: '5-data-hero',

    title: 'Multimídia',
    title2: '',
    description: (
      <>
        A nova central multimídia se conecta automaticamente ao seu smartphone através da conexão wireless. Recursos
        como mapas, músicas e informações importantes sobre seu percurso estão facilmente ao seu alcance.
      </>
    ),
    cardSrc: heroImages.thumbHero05,
  },
];
