export type TGTMEvent = {
  event: 'interaction' | string,
  brand?: string
  segment?: string
  product?: string
  path?: string
  element: string
  elementCategory: 'icone' | 'link' | 'cta' | 'card' | 'stepper' | 'image' | 'botao'
  interactionType: 'clique'
  pageSection: string
  pageSubsection: string
  selectedValue?: any
}
