import { IResponsiveImgs } from '../types/basics'

export interface IInternalCar {
  images: IResponsiveImgs[]
}

const baseUrl = '/static/images/section3/'

export const InternalMock: IInternalCar[] = [
  {
    images: [
      { img: `${baseUrl}jeep-commander-assentos-1@2x.jpg`, size: 0 },
      { img: `${baseUrl}jeep-commander-assentos-1@2x.jpg`, size: 500 },
      { img: `${baseUrl}jeep-commander-assentos-1@2x.jpg`, size: 769 },
      { img: `${baseUrl}jeep-commander-assentos-1@2x.jpg`, size: 1024 },
    ],
  },
  {
    images: [
      { img: `${baseUrl}jeep-commander-assentos-2@2x.jpg`, size: 0 },
      { img: `${baseUrl}jeep-commander-assentos-2@2x.jpg`, size: 500 },
      { img: `${baseUrl}jeep-commander-assentos-2@2x.jpg`, size: 769 },
      { img: `${baseUrl}jeep-commander-assentos-2@2x.jpg`, size: 1024 },
    ],
  },
  {
    images: [
      { img: `${baseUrl}jeep-commander-assentos-3@2x.jpg`, size: 0 },
      { img: `${baseUrl}jeep-commander-assentos-3@2x.jpg`, size: 500 },
      { img: `${baseUrl}jeep-commander-assentos-3@2x.jpg`, size: 769 },
      { img: `${baseUrl}jeep-commander-assentos-3@2x.jpg`, size: 1024 },
    ],
  },
  {
    images: [
      { img: `${baseUrl}jeep-commander-assentos-4@2x.jpg`, size: 0 },
      { img: `${baseUrl}jeep-commander-assentos-4@2x.jpg`, size: 500 },
      { img: `${baseUrl}jeep-commander-assentos-4@2x.jpg`, size: 769 },
      { img: `${baseUrl}jeep-commander-assentos-4@2x.jpg`, size: 1024 },
    ],
  },
  {
    images: [
      { img: `${baseUrl}jeep-commander-assentos-5@2x.jpg`, size: 0 },
      { img: `${baseUrl}jeep-commander-assentos-5@2x.jpg`, size: 500 },
      { img: `${baseUrl}jeep-commander-assentos-5@2x.jpg`, size: 769 },
      { img: `${baseUrl}jeep-commander-assentos-5@2x.jpg`, size: 1024 },
    ],
  },
  {
    images: [
      { img: `${baseUrl}jeep-commander-assentos-6@2x.jpg`, size: 0 },
      { img: `${baseUrl}jeep-commander-assentos-6@2x.jpg`, size: 500 },
      { img: `${baseUrl}jeep-commander-assentos-6@2x.jpg`, size: 769 },
      { img: `${baseUrl}jeep-commander-assentos-6@2x.jpg`, size: 1024 },
    ],
  },
]
