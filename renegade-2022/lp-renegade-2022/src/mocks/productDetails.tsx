import {
  files,
  productDetails as productDetailsAssets,
} from '@/assets';
import { MenuLabel } from '@/models';
import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';

export interface ProductTabSlide {
  id: string;
  index?: number;
  title: string;
  alt: string;
  slug: string;
  titleFirst?: string;
  titleSecond?: string;
  highLightedFirst: boolean;
  breakTitle?: boolean;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  parentSlug?: string;
  image: IncludePrefixResponsiveSizes;
  vimeoId?: {
    mobile: string;
    desktop: string;
  };
  tabId: string;
}

export interface ProductTab {
  id: string;
  title: string;
  slug: string;
  parentSlug?: string;
  fileUrl?: string;
  children: Omit<ProductTabSlide, 'tabId'>[];
}

// Conforto
const conforto: ProductTab = {
  id: 'tab-conforto-01',
  title: 'Conforto',
  slug: 'conforto',
  children: [
    {
      id: 'tab-conforto-c-1',
      title: 'Interior Novo Renegade',
      alt:'Painel interior do Jeep Renegade com central multimídia de 8.4 polegadas e acabamento na cor preta.', 
      slug: 'jeep-healthy-cabin',
      titleFirst: 'Jeep',
      titleSecond: 'Healthy Cabin',
      highLightedFirst: false,
      descriptionDesktop: (
        <p>
          A mais moderna tecnologia do filtro de ar N95 agora no
          seu ar-condicionado Jeep! O filtro N95 impede a entrada
          das partículas mais pesadas como a poeira e também é eficiente
          contra micropartículas, como o COVID19. Tudo isso mantendo
          a potência e o conforto do ar-condicionado Jeep, agora
          ainda mais seguro para sua saúde. 
        </p>
      ),
      descriptionMobile: (
        <p>
          A mais moderna tecnologia do filtro de ar N95 agora no
          seu ar-condicionado Jeep! O filtro N95 impede a entrada
          das partículas mais pesadas como a poeira e também é eficiente
          contra micropartículas, como o COVID19. Tudo isso mantendo
          a potência e o conforto do ar-condicionado Jeep, agora
          ainda mais seguro para sua saúde. 
        </p>
      ),
      image: productDetailsAssets.conforto.firstConforto,
    },
    {
      id: 'tab-conforto-c-2',
      title: 'Volante Multifuncional Renegade',
      alt: 'Vista interna do volante multifuncional com botões de controle de música, ar-condicionado e painel de controle do carro do novo Jeep Renegade com acabamento em preto e prata.',
      slug: 'novo-volante',
      titleFirst: 'Novo Volante:',
      titleSecond: 'Conforto e Funcionalidade',
      highLightedFirst: false,
      breakTitle: true,

      descriptionDesktop: (
        <p>
          Direção mais prazerosa e navegação mais simples com o
          novo volante com funcionalidades extras, como ajustes
          de áudio, comandos de voz ou gerenciamento de ligações.
          Praticidade e tecnologia ao alcance de suas mãos.
        </p>
      ),
      descriptionMobile: (
        <p>
          Direção mais prazerosa e navegação mais simples com o
          novo volante com funcionalidades extras, como ajustes
          de áudio, comandos de voz ou gerenciamento de ligações.
          Praticidade e tecnologia ao alcance de suas mãos.
        </p>
      ),
      image: productDetailsAssets.conforto.secondConforto,
    },
  ],
};

// Iconicidade
const iconicidade: ProductTab = {
  id: 'tab-iconicidade-01',
  title: 'Iconicidade',
  slug: 'iconicidade',
  children: [
    {
      id: 'tab-iconicidade-c-1',
      title: 'Jeep Renegade Vermelho',
      alt: 'Vista de frente do novo Jeep Renegade na cor vermelha com listra preta no capô.',
      slug: 'design-com-dna',
      titleFirst: 'Design carregado com o',
      titleSecond: 'DNA JEEP',
      highLightedFirst: false,
      descriptionDesktop: (
        <p>
          O design do Novo Renegade foi repaginado sem perder a
          identidade Jeep que você já conhece e ama. Você vai
          perceber as novidades nos mínimos detalhes: são novos
          faróis Full Led, para-choques off-road, novas cores e
          traseira e dianteira ainda mais modernas.
        </p>
      ),
      descriptionMobile: (
        <p>
          O design do Novo Renegade foi repaginado sem perder a
          identidade Jeep que você já conhece e ama. Você vai
          perceber as novidades nos mínimos detalhes: são novos
          faróis Full Led, para-choques off-road, novas cores e
          traseira e dianteira ainda mais modernas.
        </p>
      ),
      image: productDetailsAssets.iconicidade.firstIconicidade,
    },
    {
      id: 'tab-iconicidade-c-2',
      title: 'Novas rodas e cores de parar o trânsito',
      alt: 'Novas rodas e cores de parar o trânsito',
      slug: 'novas-rodas-cores',
      titleFirst: 'Novas rodas',
      titleSecond: 'e cores de parar o trânsito',
      highLightedFirst: true,

      descriptionDesktop: (
        <p>
          O novo Renegade apresenta o redesign das rodas de 17” a
          19”, que aliam beleza e conforto. A chegada das cores
          Granite Crystal, Sting Gray e Punk’n Orange também
          compõe o novo visual, para você deixar sua marca por
          onde passar.
        </p>
      ),
      descriptionMobile: (
        <p>
          O novo Renegade apresenta o redesign das rodas de 17” a
          19”, que aliam beleza e conforto. A chegada das cores
          Granite Crystal, Sting Gray e Punk’n Orange também
          compõe o novo visual, para você deixar sua marca por
          onde passar.
        </p>
      ),
      image: productDetailsAssets.iconicidade.secondIconicidade,
    },
  ],
};

// Performance
const performance: ProductTab = {
  id: 'tab-performance-01',
  title: 'Performance',
  slug: 'performance',
  children: [
    {
      id: 'tab-performance-c-1',
      title: 'Novo Motor Turbo Flex T270',
      alt: 'Novo Motor Turbo Flex T270',
      slug: 'motor-turbo-flex-270',
      titleFirst: 'Novo Motor',
      titleSecond: 'Turbo Flex T270',
      highLightedFirst: false,
      breakTitle: true,
      descriptionDesktop: (
        <p>
          Vá além com toda performance do T270, o motor mais
          potente da categoria. São 185cv para você desbravar
          todos os terrenos.
        </p>
      ),
      descriptionMobile: (
        <p>
          Vá além com toda performance do T270, o motor mais
          potente da categoria. São 185cv para você desbravar
          todos os terrenos.
        </p>
      ),
      image: productDetailsAssets.performance.firstPerformance,
    },
    {
      id: 'tab-performance-c-2',
      title: 'Versões 4x2 com Jeep Traction Control + ',
      alt: 'Versões 4x2 com Jeep Traction Control + ',
      slug: '4x2-traction-control',
      titleFirst: 'Versões 4x2 com Jeep',
      titleSecond: 'Traction Control + ',
      highLightedFirst: false,
      breakTitle: true,
      descriptionMobile: (
        <p>
          SUV de verdade conta com o Jeep Traction Control +, que
          transfere o torque da roda que está deslizando para
          aquela que está em contato com o solo, garantindo a
          força necessária, sem rodas girando em falso.
        </p>
      ),
      descriptionDesktop: (
        <p>
          SUV de verdade conta com o Jeep Traction Control +, que
          transfere o torque da roda que está deslizando para
          aquela que está em contato com o solo, garantindo a
          força necessária, sem rodas girando em falso.
        </p>
      ),
      image: productDetailsAssets.performance.secondPerformance,
    },
    {
      id: 'tab-performance-c-3',
      title: 'Tração 4x4 com Seletor de Terrenos',
      alt: 'Tração 4x4 com Seletor de Terrenos',
      slug: '4x4-active-drive',
      titleFirst: 'Tração 4x4 ',
      titleSecond: 'Com Seletor de Terrenos',
      highLightedFirst: true,

      descriptionMobile: (
        <p>
          Garanta a melhor experiência na lama ou no asfalto, com
          a tração 4x4: um sistema inteligente capaz não só de
          identificar os terrenos em que a tração é útil, como
          também acioná-la e desativá-la automaticamente.
          Inteligência e tecnologia juntas para trazer maior
          desempenho - seja nas estradas ou fora delas.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Garanta a melhor experiência na lama ou no asfalto, com
          a tração 4x4: um sistema inteligente capaz não só de
          identificar os terrenos em que a tração é útil, como
          também acioná-la e desativá-la automaticamente.
          Inteligência e tecnologia juntas para trazer maior
          desempenho - seja nas estradas ou fora delas.
        </p>
      ),
      image: productDetailsAssets.performance.thirdPerformance,
    },
    {
      id: 'tab-performance-c-4',
      title: 'Sistema de Escolha de Terrenos',
      alt: 'Representação gráfica do funcionamento do sistema de escolha de terrenos do novo Jeep Renegade.',
      slug: 'hill-descent-control',
      titleFirst: 'Hill Descent Control',
      titleSecond: '',
      highLightedFirst: true,
      breakTitle: true,

      descriptionMobile: (
        <p>
          A autonomia que você precisa. Com o sistema Hill
          Descent Control, seu veículo fica no controle de
          qualquer trajeto: ele monitora terrenos e aplica
          automaticamente freios para descer ladeiras com mais
          segurança e suavidade durante percursos off-road.
        </p>
      ),
      descriptionDesktop: (
        <p>
          A autonomia que você precisa. Com o sistema Hill
          Descent Control, seu veículo fica no controle de
          qualquer trajeto: ele monitora terrenos e aplica
          automaticamente freios para descer ladeiras com mais
          segurança e suavidade durante percursos off-road.
        </p>
      ),
      image: productDetailsAssets.performance.fourthPerformance,
    },
    {
      id: 'tab-performance-c-5',
      title: 'Selo Trail Rated de aventura',
      alt: 'Selo Trail Rated de aventura',
      slug: 'selo-trail-rated',
      titleFirst: 'Selo Trail Rated',
      titleSecond: ' de aventura',
      highLightedFirst: true,
      breakTitle: true,

      descriptionMobile: (
        <p>
          A versão Trailhawk tem qualidade Jeep comprovada com o
          selo off-road Trail Rated. Tração, articulação,
          manobrabilidade, distância do solo e impermeabilidade
          aprovados nos testes mais rigorosos. Um verdadeiro 4x4
          de aventura!
        </p>
      ),
      descriptionDesktop: (
        <p>
          A versão Trailhawk tem qualidade Jeep comprovada com o
          selo off-road Trail Rated. Tração, articulação,
          manobrabilidade, distância do solo e impermeabilidade
          aprovados nos testes mais rigorosos. Um verdadeiro 4x4
          de aventura!
        </p>
      ),
      image: productDetailsAssets.performance.fifthPerformance,
    },
    {
      id: 'tab-performance-c-6',
      title: 'Suspensão Elevada Novo Jeep Renegade',
      alt: 'Jeep Renegade na cor vermelha com listra preta no capô em terreno off road irregular.',
      slug: 'suspensao-protecao-off-road',
      titleFirst: 'Suspensão Elevada e',
      titleSecond: 'Proteções off-road',
      highLightedFirst: false,

      descriptionMobile: (
        <p>
          Quem ama o mundo outdoor e suas aventuras, mas não quer
          abrir mão do conforto e da segurança, pode contar com a
          suspensão elevada e as proteções off-road exclusivas da
          versão Trailhawk.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Quem ama o mundo outdoor e suas aventuras, mas não quer
          abrir mão do conforto e da segurança, pode contar com a
          suspensão elevada e as proteções off-road exclusivas da
          versão Trailhawk.
        </p>
      ),
      image: productDetailsAssets.performance.sixthPerformance,
    },
  ],
};

// TECNOLOGIA
export const tecnologia: ProductTab = {
  id: 'tab-tecnologia-01',
  title: 'Tecnologia',
  slug: 'tecnologia',
  children: [
    {
      id: 'tab-tecnologia-c-1',
      title: 'Central multimídia com espelhamento sem fio',
      alt: 'Central multimídia com espelhamento sem fio',
      slug: 'central-multimidia',
      titleFirst: 'Central multimídia',
      titleSecond: 'com espelhamento sem fio',
      highLightedFirst: false,
      breakTitle: true,

      descriptionMobile: (
        <p>
          Conecte-se ao seu Renegade com a nova Central
          Multimídia, com tela de até 8.4’’ e compatível com
          Apple CarPlay e Android Auto. Mapas, som, câmeras e
          tudo o que você merece para sua aventura ao alcance de
          seus dedos. Tudo isso completamente wireless.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Conecte-se ao seu Renegade com a nova Central
          Multimídia, com tela de até 8.4’’ e compatível com
          Apple CarPlay e Android Auto. Mapas, som, câmeras e
          tudo o que você merece para sua aventura ao alcance de
          seus dedos. Tudo isso completamente wireless.
        </p>
      ),
      image: productDetailsAssets.tecnologia.firstTecnologia,
    },
    {
      id: 'tab-tecnologia-c-2',
      title: 'Wireless Charger',
      alt: 'Wireless Charger',
      slug: 'wireless-charger',
      titleFirst: 'Wireless',
      titleSecond: 'Charger',
      highLightedFirst: true,
      breakTitle: true,

      descriptionMobile: (
        <p>
          Agora você pode contar com o wireless charger pad para
          carregar seus dispositivos sem cabos e sem
          complicações. Basta encostar no pad e pronto.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Agora você pode contar com o wireless charger pad para
          carregar seus dispositivos sem cabos e sem
          complicações. Basta encostar no pad e pronto.
        </p>
      ),
      image: productDetailsAssets.tecnologia.secondTecnologia,
    },
    {
      id: 'tab-tecnologia-c-3',
      title: 'Quadro de Instrumentos',
      alt: 'Quadro de Instrumentos',
      slug: 'quadro-de-instrumentos',
      titleFirst: 'Quadro de Instrumentos ',
      titleSecond: '100% Digital',
      highLightedFirst: true,
      descriptionMobile: (
        <p>
          Acesse as principais informações sobre seu Jeep
          Renegade no painel TFT com tela Full Digital de 7’’.
          Além de dados como quilometragem, velocidade, consumo e
          percentual de potência, também é possível customizar o
          painel do jeito que você desejar.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Acesse as principais informações sobre seu Jeep
          Renegade no painel TFT com tela Full Digital de 7’’.
          Além de dados como quilometragem, velocidade, consumo e
          percentual de potência, também é possível customizar o
          painel do jeito que você desejar.
        </p>
      ),
      image: productDetailsAssets.tecnologia.thirdTecnologia,
    },
    {
      id: 'tab-tecnologia-c-4',
      title: 'Park Assist',
      alt: 'Park Assist',
      slug: 'park-assist',
      titleFirst: 'Park',
      titleSecond: 'Assist',
      highLightedFirst: true,
      breakTitle: true,

      descriptionMobile: (
        <p>
          Conquiste espaço mesmo nas ruas mais agitadas ao
          acionar o Park Assist. Equipado com câmeras e sensores
          no exterior, ele auxilia a fazer corretamente a
          manobra. Você ainda acompanha tudo pela Central
          Multimídia com espelhamento sem fio.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Conquiste espaço mesmo nas ruas mais agitadas ao
          acionar o Park Assist. Equipado com câmeras e sensores
          no exterior, ele auxilia a fazer corretamente a
          manobra. Você ainda acompanha tudo pela Central
          Multimídia com espelhamento sem fio.
        </p>
      ),
      image: productDetailsAssets.tecnologia.fourthTecnologia,
    },
    {
      id: 'tab-tecnologia-c-5',
      title: 'Reconhecimento de Placas no trânsito',
      alt: 'Reconhecimento de Placas no trânsito',
      slug: 'reconhecimento-placas-transito',
      titleFirst: 'Reconhecimento de',
      titleSecond: 'Placas no trânsito',
      highLightedFirst: false,
      descriptionMobile: (
        <p>
          Evite multas desnecessárias com o sistema que informa
          ao motorista quais as velocidades máximas permitidas
          nas vias. Os alertas aparecem tanto na Central
          Multimídia quanto no Painel de Instrumentos.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Evite multas desnecessárias com o sistema que informa
          ao motorista quais as velocidades máximas permitidas
          nas vias. Os alertas aparecem tanto na Central
          Multimídia quanto no Painel de Instrumentos.
        </p>
      ),
      image: productDetailsAssets.tecnologia.fifthTecnologia,
    },
  ],
};

// Segurança
export const seguranca: ProductTab = {
  id: 'tab-seguranca-01',
  title: 'Segurança',
  slug: 'seguranca',
  children: [
    {
      id: 'tab-seguranca-c-1',
      title: '6 AIRBAGS DE SÉRIE (7 NAS 4X4)',
      alt: '6 AIRBAGS DE SÉRIE (7 NAS 4X4)',
      slug: 'tecnologia-protecao',
      titleFirst: '6 Airbags de Série',
      titleSecond: '(7 nas 4x4)',
      highLightedFirst: false,
      descriptionMobile: (
        <p>
          Todas as versões do Novo Jeep Renegade são equipadas
          com 6 airbags de série. As exceções ficam por conta das
          versões 4x4 como Trailhawk e série S, que possuem uma
          camada extra de segurança com 7 airbags - sendo um
          adicional no joelho do motorista.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Todas as versões do Novo Jeep Renegade são equipadas
          com 6 airbags de série. As exceções ficam por conta das
          versões 4x4 como Trailhawk e série S, que possuem uma
          camada extra de segurança com 7 airbags - sendo um
          adicional no joelho do motorista.
        </p>
      ),
      image: productDetailsAssets.seguranca.firstSeguranca,
    },
    {
      id: 'tab-seguranca-c-2',
      title: 'Frenagem de Emergência',
      alt: 'Frenagem de Emergência',
      slug: 'frenagem-emergencia',
      titleFirst: 'Frenagem ',
      titleSecond: 'de Emergência',
      highLightedFirst: true,
      descriptionMobile: (
        <p>
          O sistema AEB (Auto Emergency Breaking) de frenagem de
          emergência, consegue detectar através de sensores desde
          a presença de veículos na frente, até obstáculos na
          via. É emitido um alerta em casos de colisão e nos
          casos em que o motorista não reagir, os freios são
          acionados automaticamente - prevenindo colisões e
          acidentes.
        </p>
      ),
      descriptionDesktop: (
        <p>
          O sistema AEB (Auto Emergency Breaking) de frenagem de
          emergência, consegue detectar através de sensores desde
          a presença de veículos na frente, até obstáculos na
          via. É emitido um alerta em casos de colisão e nos
          casos em que o motorista não reagir, os freios são
          acionados automaticamente - prevenindo colisões e
          acidentes.
        </p>
      ),
      image: productDetailsAssets.seguranca.secondSeguranca,
    },
    {
      id: 'tab-seguranca-c-3',
      title: 'Monitoramento de Ponto Cego',
      alt: 'Monitoramento de Ponto Cego',
      slug: 'monitoramento-ponto-cego',
      titleFirst: 'Monitoramento de',
      titleSecond: 'Ponto Cego',
      highLightedFirst: false,
      descriptionMobile: (
        <p>
          Dentro do seu Novo Jeep Renegade, você não deixa nada
          passar. Graças ao sistema BSM (Blind Spot Monitoring
          System), você é prontamente notificado da presença de
          pedestres, ciclistas ou demais veículos que podem estar
          fora do alcance de visão.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Dentro do seu Novo Jeep Renegade, você não deixa nada
          passar. Graças ao sistema BSM (Blind Spot Monitoring
          System), você é prontamente notificado da presença de
          pedestres, ciclistas ou demais veículos que podem estar
          fora do alcance de visão.
        </p>
      ),
      image: productDetailsAssets.seguranca.thirdSeguranca,
    },
    {
      id: 'tab-seguranca-c-4',
      title: 'Aviso de Mudança de Faixa',
      alt: 'Jeep Renegade na cor vermelha com listra preta no capô e teto preto em pista dupla sendo avisado que está mudando de faixa pelo sistema de mudança de faixa.',
      slug: 'mudanca-faixa',
      titleFirst: 'Monitoramento de Mudança',
      titleSecond: ' de Faixa',
      highLightedFirst: true,
      descriptionMobile: (
        <p>
          O Novo Jeep Renegade vem equipado com um sensor capaz
          de identificar e medir se o veículo está dentro das
          faixas da pista. Ao perceber um desvio, um alerta é
          emitido e a direção é corrigida automaticamente.
        </p>
      ),
      descriptionDesktop: (
        <p>
          O Novo Jeep Renegade vem equipado com um sensor capaz
          de identificar e medir se o veículo está dentro das
          faixas da pista. Ao perceber um desvio, um alerta é
          emitido e a direção é corrigida automaticamente.
        </p>
      ),
      image: productDetailsAssets.seguranca.fourthSeguranca,
    },
    {
      id: 'tab-seguranca-c-5',
      title: 'Comutação Automática dos faróis',
      alt: 'Comutação Automática dos faróis',
      slug: 'comutacao-automatico-dos-farois',
      titleFirst: 'Comutação Automática',
      titleSecond: ' dos faróis',
      highLightedFirst: true,
      descriptionMobile: (
        <p>
          Com um sistema que detecta a luminosidade da pista e
          dos faróis dos outros carros, o Novo Renegade adapta
          automaticamente a intensidade e o facho de luz dos
          faróis. Luminosidade máxima para dirigir à noite, sem
          preocupações ao cruzar veículos.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Com um sistema que detecta a luminosidade da pista e
          dos faróis dos outros carros, o Novo Renegade adapta
          automaticamente a intensidade e o facho de luz dos
          faróis. Luminosidade máxima para dirigir à noite, sem
          preocupações ao cruzar veículos.
        </p>
      ),
      image: productDetailsAssets.seguranca.fifthSeguranca,
    },
    {
      id: 'tab-seguranca-c-6',
      title: 'Detector de Fadiga',
      alt: 'Detector de Fadiga',
      slug: 'detector-fadiga',
      titleFirst: 'Detector de',
      titleSecond: 'Fadiga',
      highLightedFirst: false,
      descriptionMobile: (
        <p>
          Maior segurança com a tecnologia capaz de identificar
          sinais de sonolência, cansaço e distração por meio da
          leitura de expressões faciais e movimentos do
          motorista.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Maior segurança com a tecnologia capaz de identificar
          sinais de sonolência, cansaço e distração por meio da
          leitura de expressões faciais e movimentos do
          motorista.
        </p>
      ),
      image: productDetailsAssets.seguranca.sixthSeguranca,
    },
  ],
};

// Acessórios
// export const acessorios: ProductTab = {
//   id: 'tab-acessorios-01',
//   title: 'Acessórios',
//   slug: 'acessorios',
//   fileUrl: files.accessoriesCatalogue,
//   children: [
//     /*
//     {
//       id: 'tab-acessorios-c-1',
//       title: 'Pack Áudio',
//       slug: 'pack-audio   ',
//       titleFirst: 'pack ',
//       titleSecond: 'Áudio',
//       highLightedFirst: false,
//       descriptionMobile: (
//         <p>
//           Nova central multimídia 6,2” com navegação GPS, câmera
//           de ré, comandos de áudio no volante, DVD player e TV
//           digital.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           Nova central multimídia 6,2” com navegação GPS, câmera
//           de ré, comandos de áudio no volante, DVD player e TV
//           digital.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.firstAcessorios,
//     },
//     {
//       id: 'tab-acessorios-c-2',
//       title: 'Pack Safety',
//       slug: 'pack-safety',
//       titleFirst: 'Pack',
//       titleSecond: 'Safety',
//       highLightedFirst: false,
//       descriptionMobile: (
//         <p>
//           O Pack Safety acrescenta air bags laterais, de cortina
//           e de joelho para o motorista.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           O Pack Safety acrescenta air bags laterais, de cortina
//           e de joelho para o motorista.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.secondAcessorios,
//     },
//     */
//     {
//       id: 'tab-acessorios-c-3',
//       title: 'Barras Transversais de teto',
//       slug: 'barras-transversais',
//       titleFirst: 'Barras Transversais',
//       titleSecond: 'de teto',
//       highLightedFirst: true,
//       breakTitle: true,

//       descriptionMobile: (
//         <p>
//           Feitas de alumínio e plástico industrial, suportam até
//           50kg. Elas permitem a otimização de cargas, com
//           resistência e segurança.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           Feitas de alumínio e plástico industrial, suportam até
//           50kg. Elas permitem a otimização de cargas, com
//           resistência e segurança.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.thirdAcessorios,
//     },
//     {
//       id: 'tab-acessorios-c-4',
//       title: 'Suporte de bicicleta para teto',
//       slug: 'suporte-bicicleta',
//       titleFirst: 'Suporte de bicicleta',
//       titleSecond: 'para teto',
//       highLightedFirst: true,
//       breakTitle: true,

//       descriptionMobile: (
//         <p>
//           Suporte para bicicleta: quando a aventura 4x4 termina,
//           a aventura mountain bike começa.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           Suporte para bicicleta: quando a aventura 4x4 termina,
//           a aventura mountain bike começa.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.fourthAcessorios,
//     },
//     {
//       id: 'tab-acessorios-c-5',
//       title: 'Engate Reboque Integrado',
//       slug: 'engate-reboque',
//       titleFirst: 'Engate Reboque',
//       titleSecond: 'Integrado',
//       highLightedFirst: true,
//       breakTitle: true,

//       descriptionMobile: (
//         <p>
//           Desenhado exclusivamente para o Jeep Renegade, o engate
//           tem encaixe tem perfeito e sem furos, além de toda a
//           qualidade Mopar.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           Desenhado exclusivamente para o Jeep Renegade, o engate
//           tem encaixe tem perfeito e sem furos, além de toda a
//           qualidade Mopar.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.fifthAcessorios,
//     },
//     {
//       id: 'tab-acessorios-c-6',
//       title: 'Estribo Lateral',
//       slug: 'estribo-lateral',
//       titleFirst: 'Estribo',
//       titleSecond: 'Lateral',
//       highLightedFirst: true,
//       descriptionMobile: (
//         <p>
//           Desenhado exclusivamente para o Jeep Renegade, o engate
//           tem encaixe perfeito e sem furos, além de toda a
//           qualidade Mopar.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           Desenhado exclusivamente para o Jeep Renegade, o engate
//           tem encaixe perfeito e sem furos, além de toda a
//           qualidade Mopar.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.sixthAcessorios,
//     },
//     {
//       id: 'tab-acessorios-c-7',
//       title: 'Para-Barro',
//       slug: 'para-barro',
//       titleFirst: 'Para',
//       titleSecond: '-Barro',
//       highLightedFirst: false,
//       descriptionMobile: (
//         <p>
//           Item indispensável para cair na lama. O para-barro
//           protege a carroceria do seu Jeep contra pedras que
//           podem ser arremessadas pelos pneus durante as trilhas.
//         </p>
//       ),
//       descriptionDesktop: (
//         <p>
//           Item indispensável para cair na lama. O para-barro
//           protege a carroceria do seu Jeep contra pedras que
//           podem ser arremessadas pelos pneus durante as trilhas.
//         </p>
//       ),
//       image: productDetailsAssets.acessorios.seventhAcessorios,
//     },
//   ],
// };

// SERVIÇOS
export const servicos: ProductTab = {
  id: 'tab-servicos-01',
  title: 'Serviços',
  slug: 'serviços',
  children: [
    {
      id: 'tab-servicos-c-1',
      title: 'Garantia Adicional',
      alt: 'Garantia Adicional',
      slug: 'garantia-adicional',
      titleFirst: 'Garantia',
      titleSecond: 'Adicional',
      highLightedFirst: true,
      descriptionMobile: (
        <p>
          Seu Jeep com até 5 anos de garantia. São planos de 12 ou
          24 meses adicionais a garantia de fábrica. Mais
          economia para você e seu Jeep protegido por mais tempo.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Seu Jeep com até 5 anos de garantia. São planos de 12 ou
          24 meses adicionais a garantia de fábrica. Mais
          economia para você e seu Jeep protegido por mais tempo.
        </p>
      ),
      image: productDetailsAssets.servicos.firstServicos,
    },
    {
      id: 'tab-servicos-c-2',
      title: 'Revisão Sob Medida',
      alt: 'Revisão Sob Medida',
      slug: 'revisao-sob-medida',
      titleFirst: 'Revisão',
      titleSecond: 'Sob Medida',
      highLightedFirst: true,
      descriptionMobile: (
        <p>
          Monte um plano de revisões com descontos e preços
          fixos. Planos personalizados de duas a dez revisões
          programadas que podem ser diluídas junto ao
          financiamento do seu Jeep.
        </p>
      ),
      descriptionDesktop: (
        <p>
          Monte um plano de revisões com descontos e preços
          fixos. Planos personalizados de duas a dez revisões
          programadas que podem ser diluídas junto ao
          financiamento do seu Jeep.
        </p>
      ),
      image: productDetailsAssets.servicos.secondServicos,
    },
  ],
};

const productDetails: ProductTab[] = [
  conforto,
  iconicidade,
  performance,
  tecnologia,
  seguranca,
  // acessorios,
  servicos,
].map((d) => ({ ...d, parentSlug: 'tudo-do-renegade' }));

export const getProductDetails = (): MenuLabel[] => {
  if (!productDetails) {
    return [];
  }
  return productDetails.reduce((prev, item) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${item.slug}`,
      },
    ];
  }, [] as MenuLabel[]);
};

let index = -1;
export const allSlides: ProductTabSlide[] =
  productDetails.reduce((prev, curr) => {
    return [
      ...prev,
      ...curr.children.map((c) => {
        index++;
        return {
          ...c,
          index,
          parentSlug: curr.slug,
          tabId: curr.id,
        };
      }),
    ];
  }, [] as ProductTabSlide[]);

export default productDetails;
