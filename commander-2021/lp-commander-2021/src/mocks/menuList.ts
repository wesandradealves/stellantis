export interface IMenuItem {
  id: string
  title: string
  ref: string
  children?: string[]
  main?: boolean
}
export interface IMenuListItem extends IMenuItem {
  subMenu?: IMenuItem[]
}

const MenuList: IMenuListItem[] = [
  {
    id: 'jeep-commander',
    title: 'JEEP COMMANDER',
    ref: 'commander',
    main: true,
    // link: 'link',
  },
  {
    id: 'reserva',
    title: 'RESERVA',
    ref: 'reserva',
    // link: 'link',
  },
  {
    id: 'versatilidade',
    title: 'VERSATILIDADE',
    ref: 'versatilidade',
    // link: 'link',
  },
  {
    id: 'versoes',
    children: [
      'limited-t270-turbo-flex',
      'overland-t270-turbo-flex',
      'limited-td380-4x4-turbo-diesel',
      'overland-td380-4x4-turbo-diesel',
    ],
    title: 'TODAS AS VERSÕES',
    ref: 'todas-as-versoes',
    // link: 'link',
  },
  {
    id: 'fotos',
    title: 'FOTOS',
    ref: 'fotos',
    // link: 'link',
  },
  {
    id: 'commander',
    title: 'TUDO DO COMMANDER:',
    ref: 'tudo-do-commander',
    subMenu: [
      {
        id: 'sofisticacao',
        title: 'Sofisticação',
        ref: 'sofisticacao',
        // link: 'link',
      },
      {
        id: 'design',
        title: 'Design',
        ref: 'design',
        // link: 'link',
      },
      {
        id: 'performance',
        title: 'Performance',
        ref: 'performance',
        // link: 'link',
      },
      {
        id: 'dna',
        title: 'DNA Off-Road',
        ref: 'dna-off-road',
        // link: 'link',
      },
      {
        id: 'conforto',
        title: 'Conforto e Espaço',
        ref: 'conforto',
        // link: 'link',
      },
      {
        id: 'tecnologia',
        title: 'Tecnologia',
        ref: 'tecnologia',
        // link: 'link',
      },
      {
        id: 'tecnologia-autonomas',
        title: 'Tecnologias Autônomas',
        ref: 'tecnologia-autonomas',
        // link: 'link',
      },
      {
        id: 'seguranca',
        title: 'Segurança',
        ref: 'segurança',
        // link: 'link',
      },
      {
        id: 'acessorios',
        title: 'Acessórios',
        ref: 'acessorios',
        // link: 'link',
      },
    ],
  },
]
export default MenuList
