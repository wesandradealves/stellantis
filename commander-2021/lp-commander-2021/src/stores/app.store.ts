import create from 'zustand'
import { pushEvent } from '../utils/Tracking.Helpers'

export type TRoutes =
  | '/'
  | 'reserva'
  | 'versatilidade'
  | 'limited-t270-turbo-flex'
  | 'overland-t270-turbo-flex'
  | 'limited-td380-4x4-turbo-diesel'
  | 'overland-td380-4x4-turbo-diesel'
  | 'fotos'
  | 'commander'
  | 'sofisticacao'
  | 'design'
  | 'performance'
  | 'dna'
  | 'conforto'
  | 'tecnologia'
  | 'tecnologia-autonomas'
  | 'seguranca'
  | ''
interface IAppStore {
  scrollTop: number
  showCta: boolean
  showCookie: boolean
  showDisclaimer: boolean
  currentSection: TRoutes
  currentVersao: string
  canChangeRoute: boolean
  setScrollTop: (scrollTop: number) => void
  setShowCta: (showCta: boolean) => void
  setShowCookie: (showCookie: boolean) => void
  setShowDisclaimer: (showCookie: boolean) => void
  menuOpened: boolean
  setMenuOpened: (isOpened: boolean, track?: boolean) => void
  setCurrentVersao: (currentVersao: string) => void
  setCurrentSection: (currentSection: TRoutes, selectedTab?: string) => void
  setCanChangeRoute: (canChangeRoute: boolean) => void
}

export const useAppStore = create<IAppStore>(set => ({
  scrollTop: 0,
  showCta: false,
  showCookie: false,
  showDisclaimer: false,
  currentSection: '',
  currentVersao: 'limited-t270-turbo-flex',
  canChangeRoute: true,
  setShowCookie: showCookie => set({ showCookie }),
  setScrollTop: scrollTop => set({ scrollTop }),
  setShowCta: showCta => set({ showCta }),
  setShowDisclaimer: showDisclaimer => set({ showDisclaimer }),
  menuOpened: false,
  setCanChangeRoute: canChangeRoute => set({ canChangeRoute }),
  setCurrentVersao: currentVersao => set({ currentVersao }),
  setMenuOpened: (menuOpened, track = true) => {
    if (track) {
      pushEvent({
        element: menuOpened ? 'abrir-menu' : 'fechar-menu',
        elementCategory: 'icone',
        interactionType: 'clique',
        pageSection: 'conteudo',
        pageSubsection: 'menu',
        event: 'interaction',
      })
    }

    return set({ menuOpened })
  },
  setCurrentSection: (currentSection, selectedTab) => {
    if (typeof window !== 'undefined') {
      if (
        !currentSection.includes('commander') ||
        !window.location.pathname.includes('/commander-')
      ) {
        if (currentSection.includes('commander')) {
          const newSection = selectedTab
            ? `${currentSection}-${selectedTab}`
            : currentSection
          window.history.pushState(null, newSection, newSection === 'jeep-commander' || newSection === '/' ? '/' : `#${newSection}`)
        } else {
          window.history.pushState(null, currentSection, currentSection === '/' ? '/' : `#${currentSection}`)
        }
      }
    }
    return set({ currentSection })
  },
}))
