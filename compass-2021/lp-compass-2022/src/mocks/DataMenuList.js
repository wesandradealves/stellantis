// Desktop e Mobile
// Itens do Menu, os CTAS estão em DataMenuActions

const MenuList = [
  {
    id: 1,
    name: 'Compass',
    ref: 'compass',
    link: 'compass-2022',
  },
  {
    id: 2,
    name: 'Destaques',
    ref: 'destaque',
    link: 'destaques',
  },
  // {
  //   id: 3,
  //   name: 'Autonomia',
  //   ref: 'autonomia',
  //   link: 'autonomia',
  // },
  {
    id: 4,
    name: 'Versões',
    ref: 'versoes',
    link: 'versoes',
  },
  {
    id: 5,
    name: 'Fotos',
    ref: 'fotos',
    link: 'galeria',
  },
  {
    id: 6,
    name: 'Tudo do Compass',
    ref: 'tudo-do-compass',
    link: 'all-compass',
    submenu: [
      {
        id: 1,
        name: 'Performance',
        ref: 'performance',
        link: 'performance',
      },
      {
        id: 2,
        name: 'Capacidade Offroad',
        ref: 'capacidade-offroad',
        link: 'capacidade-offroad',
      },
      {
        id: 3,
        name: 'Tecnologia',
        ref: 'tecnologia',
        link: 'tecnologia',
      },
      {
        id: 4,
        name: 'Tecnologias Autônomas',
        ref: 'tecnologias-autonomas',
        link: 'tecnologias-autonomas',
      },
      {
        id: 5,
        name: 'Design Externo',
        ref: 'design-externo',
        link: 'design-externo',
      },
      {
        id: 6,
        name: 'Conforto',
        ref: 'conforto',
        link: 'conforto',
      },
      {
        id: 7,
        name: 'Segurança',
        ref: 'seguranca',
        link: 'seguranca',
      },
      {
        id: 8,
        name: 'Acessórios',
        ref: 'acessorios',
        link: 'acessorios',
      },
      {
        id: 9,
        name: 'Serviços',
        ref: 'serviços',
        link: 'servicos',
      },
    ],
  },
];

export default MenuList;
