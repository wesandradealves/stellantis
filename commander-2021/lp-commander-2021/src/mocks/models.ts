import { IResponsiveImgs } from '../types/basics'

export type IModels = {
  id: number
  ref: string
  model: string
  title: string
  images: IResponsiveImgs[]
  car: IResponsiveImgs[]
  description: string[]
}

export const Models: IModels[] = [
  {
    id: 0,
    ref: 'limited-t270-turbo-flex',
    model: 'Limited T270 Turbo Flex',
    title: 'Limited T270 Turbo Flex',
    images: [
      {
        img: '/static/images/section4/thumb/thumb-1@2x.png',
        size: 0,
      },
      {
        img: '/static/images/section4/thumb/thumb-1@2x.png',
        size: 768,
      },
    ],
    car: [
      { img: '/static/images/section4/1-jeep-commander-limited-T270@2x.png', size: 0 },
      { img: '/static/images/section4/1-jeep-commander-limited-T270@2x.png', size: 768 },
    ],
    description: [
      '• Painel full digital 10,25’’ e Multimídia de 10,1’’ ',
      '• Tecnologias de Direção Autônomas',
      '• Adventure Intelligence',
    ],
  },
  {
    id: 1,
    ref: 'overland-t270-turbo-flex',
    model: 'Overland T270 Turbo Flex',
    title: 'Overland T270 Turbo Flex',
    images: [
      {
        img: '/static/images/section4/thumb/thumb-2@2x.png',
        size: 0,
      },
      {
        img: '/static/images/section4/thumb/thumb-2@2x.png',
        size: 768,
      },
    ],
    car: [
      { img: '/static/images/section4/2-jeep-commander-overland-T270@2x.png', size: 0 },
      {
        img: '/static/images/section4/2-jeep-commander-overland-T270@2x.png',
        size: 768,
      },
    ],
    description: [
      '• Teto solar panorâmico',
      '• Som Premium Harman-Kardon',
      '• Adventure Intelligence+ com Alexa in Vehicle',
    ],
  },
  {
    id: 2,
    ref: 'limited-td380-4x4-turbo-diesel',
    model: 'Limited TD380 4x4 Turbo Diesel',
    title: 'Limited TD380 4x4 Turbo Diesel',
    images: [
      {
        img: '/static/images/section4/thumb/thumb-3@2x.png',
        size: 0,
      },
      {
        img: '/static/images/section4/thumb/thumb-3@2x.png',
        size: 768,
      },
    ],
    car: [
      { img: '/static/images/section4/3-jeep-commander-limited-TD380@2x.png', size: 0 },
      {
        img: '/static/images/section4/3-jeep-commander-limited-TD380@2x.png',
        size: 768,
      },
    ],
    description: [
      '• Tração 4x4 com reduzida',
      '• HDC - Hill Descent Control',
      '• Seletor de Terrenos com 3 modos',
    ],
  },
  {
    id: 3,
    ref: 'overland-td380-4x4-turbo-diesel',
    model: 'Overland TD380 4x4 Turbo Diesel',
    title: 'Overland TD380 4x4 Turbo Diesel',
    images: [
      {
        img: '/static/images/section4/thumb/thumb-4@2x.png',
        size: 0,
      },
      {
        img: '/static/images/section4/thumb/thumb-4@2x.png',
        size: 768,
      },
    ],
    car: [
      {
        img: '/static/images/section4/4-jeep-commander-overland-TD380@2x.png',
        size: 0,
      },
      {
        img: '/static/images/section4/4-jeep-commander-overland-TD380@2x.png',
        size: 768,
      },
    ],
    description: [
      '• Tração 4x4 com reduzida',
      '• HDC - Hill Descent Control',
      '• Seletor de Terrenos com 3 modos',
    ],
  },
]

export default Models
