import TagManager from 'react-gtm-module'
import { TGTMEvent } from './Tracking.types'

export function slugify(texto: string): string {
  return texto
    .toString()
    .toLowerCase()
    .trim() // transforma texto para caixa baixa e remove espaços nas extremidades do texto
    .replace(/\s+/g, '-') // substitui espaços por hífen
    .replace(/[áàäâã]/g, 'a') // substitui caracteres especiais á à ä â ã por a
    .replace(/[éèëê]/g, 'e') // substitui caracteres especiais é è ë ê  por e
    .replace(/[íìîï]/g, 'i') // substitui caracteres especiais í ì î ï por i
    .replace(/[óòöôõ]/g, 'o') // substitui caracteres especiais ó ò ö ô õ por o
    .replace(/[úùüû]/g, 'u') // substitui caracteres especiais ú ù ü û por u
    .replace(/ñ/g, 'n') // substitui caracteres especiais ñ por n
    .replace(/ç/g, 'c') // substitui caracteres especiais ç por c
    .replace(/[^\a-z0-9\-]+/g, '') // exclui caracteres que não seja alfanumérico
    .replace(/\-\-+/g, '-') // substitui mutiplos hífens por hífen simples
}

export function gtmTrack(base: object, element: string, infos?: object): void {}

export const isSSR = () => typeof window === 'undefined'

export const useGtmTracker = () => {
  return {
    initilize: TagManager.initialize,
    dataLayer: TagManager.dataLayer,
  }
}

interface IDataLayerWindow {
  dataLayer: Array<unknown>
}

export const pushEvent = ({
  brand = 'jeep',
  segment = 'landing-page',
  product = 'commander',
  path,
  event,
  element,
  elementCategory,
  interactionType,
  pageSection,
  pageSubsection,
  selectedValue,
}: TGTMEvent) => {
  const trackData: TGTMEvent = {
    event: slugify(event),
    brand,
    segment,
    product,
    element: slugify(element),
    elementCategory,
    interactionType,
    pageSection: slugify(pageSection),
    pageSubsection: slugify(pageSubsection),
    selectedValue,
    path:
      path ||
      (['/', '/jeep-commander'].includes(window.location.pathname)
        ? 'home'
        : window.location.pathname.replace('/', '')),
  }
  if ((global?.window as unknown as IDataLayerWindow)?.dataLayer) {
    ;(global.window as unknown as IDataLayerWindow).dataLayer.push(trackData)
    // console.log('push datalayer', trackData)
  }
}
