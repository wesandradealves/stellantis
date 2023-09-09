enum EContentMap {
  sofisticacao = 'sofisticacao',
  conforto = 'conforto',
  design = 'design',
  torque = 'torque',
  conectividade = 'conectividade',
}

export interface ISection1Images {
  images: {
    slides: {
      img: string
      size: number
    }[]
    thumbs: {
      img: string
      size: number
    }[]
  }[]
  heroes: {
    background: string
    backgroundExtended: string
    car: string
    carExtended: string
  }
}

export interface IModalContent {
  id: number
  header: string
  infoList: string
  thumbnails: {
    img: string
    size: number
  }[]
  modalImg: {
    img: string
    size: number
  }[]
  alt: string
  title: string
  getPrevious: () => null | IModalContent
  getNext: () => null | IModalContent
}

export type IModalContentMap = {
  [key in keyof typeof EContentMap]: IModalContent
}

export interface ISection1StoreData {
  modalContent: IModalContent | null
  setModalContent: (
    newModalContent: IModalContent,
    callback?: () => void,
  ) => void
}
