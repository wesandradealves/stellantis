import { IVersion, IVersionFragment } from '@/models';

const versions: IVersionFragment[] = [
  {
    id: 'sport',
    name: 'Sport',
    slug: 'sport',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO',
    nameParts: {
      first: 'Sport',
      second: '',
    },
    short: 'Sport',
    hex: '#3A369E',
    details: [
      {
        title: (
          <>
            {'Motor T270'}
            <br />
            {'Turbo Flex'}
          </>
        ),
        titleDescription: 'Motor T270 Turbo Flex',
        photo: 'sport01',
      },
      {
        title: (
          <>
            {'Faróis'}
            <br />
            {'Full LED'}
          </>
        ),
        titleDescription: 'Faróis Full LED',
        photo: 'sport02',
      },
      {
        title: (
          <>
            {'Tecnologias'}
            <br />
            {'autônomas'}
          </>
        ),
        titleDescription: 'Tecnologias autônomas',
        photo: 'sport03',
      },
    ],
    text: 'light',
  },
  {
    id: 'longitude',
    slug: 'longitude',
    name: 'Longitude',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO2',
    nameParts: {
      first: 'Longitude',
      second: '',
    },
    short: 'Longitude',
    hex: '#92D0DB',
    details: [
      {
        title: (
          <>
            {'Bancos'}
            <br />
            {'em couro'}
          </>
        ),
        titleDescription: 'Bancos em couro',
        photo: 'longitude01',
      },
      {
        title: (
          <>
            {'Central'}
            <br />
            {'multimídia 8.4’’'}
          </>
        ),
        titleDescription: 'Central Multimídia 8.4’’',
        photo: 'longitude02',
      },
      {
        title: (
          <>
            {'Painel full'}
            <br />
            {'digital 7”'}
          </>
        ),
        titleDescription: 'Painel full digital 7”',
        photo: 'longitude03',
      },
    ],
    text: 'dark',
  },
  {
    id: 'serie-s',
    name: 'Série S',
    slug: 'serie-s',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO4',
    nameParts: {
      first: 'Série',
      second: 'S',
    },
    short: 'Série S',
    hex: '#FFBA0D',
    details: [
      {
        title: (
          <>
            {'Tração'}
            <br />
            {'4x4'}
          </>
        ),
        titleDescription: 'Tração 4x4',
        photo: 'series01',
      },
      {
        title: (
          <>
            {'Rodas de '}
            <br />
            {'liga leve 19"'}
          </>
        ),
        titleDescription: 'Rodas de liga leve 19"',
        photo: 'series02',
      },
      {
        title: (
          <>
            {'7 Airbags'}
            <br />
            {'de Série'}
          </>
        ),
        titleDescription: '7 Airbags de Série',
        photo: 'series03',
      },
    ],
    text: 'dark',
  },
  {
    id: 'trailhawk',
    name: 'Trailhawk',
    slug: 'trailhawk',
    versionText: 'LIBERDADE PARA VER O MUNDO DO TOPO5',
    nameParts: {
      first: 'Trailhawk',
      second: '',
    },
    short: 'Trailhawk',
    hex: '#A31345',
    details: [
      {
        title: (
          <>
            {'Pneus de'}
            <br />
            {'uso misto'}
          </>
        ),
        titleDescription: 'Pneus de uso misto”',
        photo: 'hawk01',
      },
      {
        title: (
          <>
            {'Seletor de'}
            <br />
            {'terrenos'}
          </>
        ),
        titleDescription: 'Seletor de terrenos',
        photo: 'hawk02',
      },
      {
        title: (
          <>
            {'Suspensão'}
            <br />
            {'Elevada'}
          </>
        ),
        titleDescription: 'Suspenção elevada',
        photo: 'hawk03',
      },
    ],
    text: 'light',
  },
];

export const dataVersions = (): IVersion[] => [
  ...versions.map((v) => ({
    ...v,
    fullName: `${v.nameParts.first} ${v.nameParts.second}`,
  })),
];
