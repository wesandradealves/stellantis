import { TRoutes } from '../stores/app.store'

const mountMetaBase = (page: TRoutes) => {
  return [
    {
      name: 'description',
      content: '',
    },
  ]
}

export const baseURL = 'http://commander.jeep.com.br/'

export const JeepVersoes = [
  {
    name: 'description',
    content:
      'São 4 versões do Jeep Commander, cada uma com pontos únicos e específicos. Só falta descobrir qual é a ideal para você.',
  },
  {
    name: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    itemProp: 'name',
    content: 'Jeep Commander | Versões',
  },
  {
    itemProp: 'description',
    content:
      'São 4 versões do Jeep Commander, cada uma com pontos únicos e específicos. Só falta descobrir qual é a ideal para você.',
  },
  {
    itemProp: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'Jeep Commander | Versões',
  },
  {
    name: 'twitter:description',
    content:
      'São 4 versões do Jeep Commander, cada uma com pontos únicos e específicos. Só falta descobrir qual é a ideal para você.',
  },
  {
    name: 'twitter:site',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:creator',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:image:src',
    content: '/static/meta/twitter.jpg',
  },
  {
    property: 'og:title',
    content: 'Jeep Commander | Versões',
  },
  {
    property: 'og:description',
    content:
      'São 4 versões do Jeep Commander, cada uma com pontos únicos e específicos. Só falta descobrir qual é a ideal para você.',
  },
  {
    property: 'og:image',
    content: '/static/meta/facebook.jpg',
  },
  {
    property: 'og:site_name',
    content: 'Jeep Commander | Versões',
  },
  {
    property: 'og:locale',
    content: 'pt_BR',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'fb:app_id',
    content: 'FB_APP_ID',
  },
]

export const JeepTudoSobre = [
  {
    name: 'description',
    content:
      'Saiba tudo sobre a sofisticação, design, performance, DNA off-road, conforto, tecnologia, tecnologias autônomas e segurança do seu novo SUV.',
  },
  {
    name: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    itemProp: 'name',
    content: 'Jeep Commander | Tudo sobre',
  },
  {
    itemProp: 'description',
    content:
      'Saiba tudo sobre a sofisticação, design, performance, DNA off-road, conforto, tecnologia, tecnologias autônomas e segurança do seu novo SUV.',
  },
  {
    itemProp: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'Jeep Commander | Tudo sobre',
  },
  {
    name: 'twitter:description',
    content:
      'Saiba tudo sobre a sofisticação, design, performance, DNA off-road, conforto, tecnologia, tecnologias autônomas e segurança do seu novo SUV.',
  },
  {
    name: 'twitter:site',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:creator',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:image:src',
    content: '/static/meta/twitter.jpg',
  },
  {
    property: 'og:title',
    content: 'Jeep Commander | Tudo sobre',
  },
  {
    property: 'og:description',
    content:
      'Saiba tudo sobre a sofisticação, design, performance, DNA off-road, conforto, tecnologia, tecnologias autônomas e segurança do seu novo SUV.',
  },
  {
    property: 'og:image',
    content: '/static/meta/facebook.jpg',
  },
  {
    property: 'og:site_name',
    content: 'Jeep Commander | Tudo sobre',
  },
  {
    property: 'og:locale',
    content: 'pt_BR',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'fb:app_id',
    content: 'FB_APP_ID',
  },
]

const DefaultMetas = [
  {
    name: 'description',
    content:
      'Desenvolvido no Brasil, o Jeep Commander veio para revolucionar a categoria. Surpreenda-se com esse SUV espaçoso, potente, conectado, seguro e confortável.',
  },
  {
    name: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    itemProp: 'name',
    content: 'Jeep Commander | O seu novo SUV',
  },
  {
    itemProp: 'description',
    content:
      'Desenvolvido no Brasil, o Jeep Commander veio para revolucionar a categoria. Surpreenda-se com esse SUV espaçoso, potente, conectado, seguro e confortável.',
  },
  {
    itemProp: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'Jeep Commander | SUV de verdade',
  },
  {
    name: 'twitter:description',
    content:
      'Um SUV espaçoso, potente, conectado, seguro e confortável de verdade.',
  },
  {
    name: 'twitter:site',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:creator',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:image:src',
    content: '/static/meta/twitter.jpg',
  },
  {
    property: 'og:title',
    content: 'Jeep Commander | O SUV dos seus sonhos',
  },
  {
    property: 'og:description',
    content:
      'Espaçoso, potente, conectado, seguro e confortável – assim é o seu mais novo Jeep SUV.',
  },
  {
    property: 'og:image',
    content: '/static/meta/facebook.jpg',
  },
  {
    property: 'og:site_name',
    content: 'Jeep Commander | O SUV dos seus sonhos',
  },
  {
    property: 'og:locale',
    content: 'pt_BR',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'fb:app_id',
    content: 'FB_APP_ID',
  },
]

const JeepNovidades = [
  {
    name: 'description',
    content:
      'Aqui, você fica por dentro de todas as novidades sobre esse SUV único em primeiríssima mão.',
  },
  {
    name: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    itemProp: 'name',
    content: 'Jeep Commander | Novidades',
  },
  {
    itemProp: 'description',
    content:
      'Aqui, você fica por dentro de todas as novidades sobre esse SUV único em primeiríssima mão.',
  },
  {
    itemProp: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'Jeep Commander | Novidades',
  },
  {
    name: 'twitter:description',
    content:
      'Aqui, você fica por dentro de todas as novidades sobre esse SUV único em primeiríssima mão.',
  },
  {
    name: 'twitter:site',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:creator',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:image:src',
    content: '/static/meta/twitter.jpg',
  },
  {
    property: 'og:title',
    content: 'Jeep Commander | Novidades',
  },
  {
    property: 'og:description',
    content:
      'Aqui, você fica por dentro de todas as novidades sobre esse SUV único em primeiríssima mão.',
  },
  {
    property: 'og:image',
    content: '/static/meta/facebook.jpg',
  },
  {
    property: 'og:site_name',
    content: 'Jeep Commander | Novidades',
  },
  {
    property: 'og:locale',
    content: 'pt_BR',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'fb:app_id',
    content: 'FB_APP_ID',
  },
]

const JeepFotos = [
  {
    name: 'description',
    content:
      'Descubra bem de perto cada detalhe que faz do Jeep Commander o SUV dos seus sonhos.',
  },
  {
    name: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    itemProp: 'name',
    content: 'Jeep Commander | Fotos',
  },
  {
    itemProp: 'description',
    content:
      'Descubra bem de perto cada detalhe que faz do Jeep Commander o SUV dos seus sonhos.',
  },
  {
    itemProp: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'Jeep Commander | Fotos',
  },
  {
    name: 'twitter:description',
    content:
      'Descubra bem de perto cada detalhe que faz do Jeep Commander o SUV dos seus sonhos.',
  },
  {
    name: 'twitter:site',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:creator',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:image:src',
    content: '/static/meta/twitter.jpg',
  },
  {
    property: 'og:title',
    content: 'Jeep Commander | Fotos',
  },
  {
    property: 'og:description',
    content:
      'Descubra bem de perto cada detalhe que faz do Jeep Commander o SUV dos seus sonhos.',
  },
  {
    property: 'og:image',
    content: '/static/meta/facebook.jpg',
  },
  {
    property: 'og:site_name',
    content: 'Jeep Commander | Fotos',
  },
  {
    property: 'og:locale',
    content: 'pt_BR',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'fb:app_id',
    content: 'FB_APP_ID',
  },
]

const JeepAssentos = [
  {
    name: 'description',
    content:
      'Com 3 fileiras de assentos reclináveis, o Jeep Commander tem o maior espaço interno da categoria.',
  },
  {
    name: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    itemProp: 'name',
    content: 'Jeep Commander | Bancos Versáteis',
  },
  {
    itemProp: 'description',
    content:
      'Com 3 fileiras de assentos reclináveis, o Jeep Commander tem o maior espaço interno da categoria.',
  },
  {
    itemProp: 'image',
    content: '/static/meta/jeep-commander.jpg',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'Jeep Commander | Bancos Versáteis',
  },
  {
    name: 'twitter:description',
    content:
      'Com 3 fileiras de assentos reclináveis, o Jeep Commander tem o maior espaço interno da categoria.',
  },
  {
    name: 'twitter:site',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:creator',
    content: '@JeepdoBrasil',
  },
  {
    name: 'twitter:image:src',
    content: '/static/meta/twitter.jpg',
  },
  {
    property: 'og:title',
    content: 'Jeep Commander | Bancos Versáteis',
  },
  {
    property: 'og:description',
    content:
      'Com 3 fileiras de assentos reclináveis, o Jeep Commander tem o maior espaço interno da categoria.',
  },
  {
    property: 'og:image',
    content: '/static/meta/facebook.jpg',
  },
  {
    property: 'og:site_name',
    content: 'Jeep Commander | Assentos reclináveis',
  },
  {
    property: 'og:locale',
    content: 'pt_BR',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image:width',
    content: '1200',
  },
  {
    property: 'og:image:height',
    content: '630',
  },
  {
    property: 'fb:app_id',
    content: 'FB_APP_ID',
  },
]

export function getMetaData(page: TRoutes) {
  const metaProps = {
    default: [...DefaultMetas],
    '/': [...DefaultMetas],
    conforto: [...JeepTudoSobre],
    'jeep-commander': [...DefaultMetas],
    novidades: [...JeepNovidades],
    'bancos-versateis': [...JeepAssentos],
    'limited-t270-turbo-flex': [...JeepVersoes],
    'overland-t270-turbo-flex': [...JeepVersoes],
    'limited-td380-4x4-turbo-diesel': [...JeepVersoes],
    'overland-td380-4x4-turbo-diesel': [...JeepVersoes],
    versoes: [...JeepVersoes],
    fotos: [...JeepFotos],
    commander: [...JeepTudoSobre],
    'commander-sofisticacao': [...JeepTudoSobre],
    'commander-design': [...JeepTudoSobre],
    'commander-performance': [...JeepTudoSobre],
    'commander-dna': [...JeepTudoSobre],
    'commander-conforto': [...JeepTudoSobre],
    'commander-tecnologia': [...JeepTudoSobre],
    'commander-tecnologia-autonomas': [...JeepTudoSobre],
    'commander-seguranca': [...JeepTudoSobre],
    'commander-acessorios': [...JeepTudoSobre],
    'commander-servicos': [...JeepTudoSobre],
  }

  const currentMetaProps = metaProps[page] || metaProps.default

  return currentMetaProps
}

export function getMetaTitle(page: TRoutes) {
  const metaTitles = {
    default: 'Jeep Commander | O seu novo SUV',
    '/': 'Jeep Commander | O seu novo SUV',
    'jeep-commander': 'Jeep Commander | O seu novo SUV',
    novidades: 'Jeep Commander | Novidades',
    'versatilidade': 'Jeep Commander | Assentos Reclináveis',
    'limited-t270-turbo-flex': 'Jeep Commander | Versões',
    'overland-t270-turbo-flex': 'Jeep Commander | Versões',
    'limited-td380-4x4-turbo-diesel': 'Jeep Commander | Versões',
    'overland-td380-4x4-turbo-diesel': 'Jeep Commander | Versões',
    versoes: 'Jeep Commander | Versões',
    fotos: 'Jeep Commander | Fotos',
    commander: 'Jeep Commander | Tudo sobre',
    'sofisticacao': 'Jeep Commander | Tudo sobre',
    'design': 'Jeep Commander | Tudo sobre',
    'performance': 'Jeep Commander | Tudo sobre',
    'dna': 'Jeep Commander | Tudo sobre',
    'conforto': 'Jeep Commander | Tudo sobre',
    'tecnologia': 'Jeep Commander | Tudo sobre',
    'tecnologia-autonomas': 'Jeep Commander | Tudo sobre',
    'seguranca': 'Jeep Commander | Tudo sobre',
    'acessorios': 'Jeep Commander | Tudo sobre',
    'servicos': 'Jeep Commander | Tudo sobre',
  }

  const currentMetaTitle = metaTitles[page] || metaTitles.default

  return currentMetaTitle
}
