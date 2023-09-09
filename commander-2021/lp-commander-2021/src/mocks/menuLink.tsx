import { WhatsappIcon } from '../components/SvgIcons'

export interface IMenuLinkItem {
  id: number
  name: string
  ref: string
  link: string
  icon?: JSX.Element
  inverted?: boolean
}

const MenuLink: IMenuLinkItem[] = [
  // {
  //   id: 4,
  //   name: 'Converse com a JEEP',
  //   ref: 'converse-com-a-jeep',
  //   link: 'https://wa.me/message/DDW4N5IQGROMH1',
  //   icon: <WhatsappIcon style={{ width: '12px', marginRight: '2px', marginTop: '-2px' }} />,
  // },
  {
    id: 1,
    name: 'Monte o seu',
    ref: 'compre-o-seu',
    link: 'https://commander.jeep.com.br/monte.html#versao',
  },
  {
    id: 2,
    name: 'Simule o financiamento',
    ref: 'simule-o-financiamento',
    link: 'https://commander.jeep.com.br/monte.html#versao',
  },
  {
    id: 3,
    name: 'Concessionária',
    ref: 'concessionaria',
    link: 'https://www.jeep.com.br/concessionarias.html',
  },
  {
    id: 4,
    name: 'Compre o seu',
    ref: 'assine',
    link: 'https://www.jeep.com.br/formularios/quero-comprar-jeep-commander.html',
    inverted: true,
  },
]

export default MenuLink
