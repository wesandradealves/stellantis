import { Button } from '../../components/Button'
import { MenuLink } from '../../mocks'
import { useSection6Store } from './useSection6Store'
import { TabManager } from './TabManager'
import { TabComponent } from './TabComponent'
import RightSign from '/public/static/icons/right-sign.svg'
import {
  carGalleryImages1,
  carGalleryImages2,
  carGalleryImages3,
  carGalleryImages4,
  carGalleryImages5,
  carGalleryImages6,
  carGalleryImages7,
  carGalleryImages8,
  carGalleryImages9,
} from './constants'
import { useAppStore } from '../../stores/app.store'
import { useEffect } from 'react'
import { isSSR, pushEvent } from '../../utils/Tracking.Helpers'
import Stamp from '../../components/Stamp/index'

const tabs = [
  {
    id: 'conforto',
    title: 'Conforto e Espaço',
    Component: () => <TabComponent carGalleryImages={carGalleryImages1} />,
  },
  {
    id: 'sofisticacao',
    title: 'Sofisticação',
    Component: () => <TabComponent carGalleryImages={carGalleryImages2} />,
  },
  {
    id: 'design',
    title: 'Design',
    Component: () => <TabComponent carGalleryImages={carGalleryImages3} />,
  },
  {
    id: 'performance',
    title: 'Performance',
    Component: () => <TabComponent carGalleryImages={carGalleryImages4} />,
  },
  {
    id: 'dna',
    title: 'DNA Off-Road',
    Component: () => <TabComponent carGalleryImages={carGalleryImages5} />,
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    Component: () => <TabComponent carGalleryImages={carGalleryImages6} />,
  },
  {
    id: 'tecnologia-autonomas',
    title: 'Tecnologias Autônomas',
    Component: () => <TabComponent carGalleryImages={carGalleryImages7} />,
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    Component: () => <TabComponent carGalleryImages={carGalleryImages8} />,
  },
  {
    id: 'acessorios',
    title: 'Acessórios',
    Component: () => <TabComponent carGalleryImages={carGalleryImages9} />,
  },
]

export const Section6 = (): JSX.Element => {
  const { setCurrentSection, canChangeRoute } = useAppStore()
  const { selectedTab } = useSection6Store()

  const CurrentTabContent = tabs[selectedTab].Component

  useEffect(() => {
    const checkIfItsInView = () => {
      if (!canChangeRoute) return
      const section = document.querySelector<HTMLDivElement>('.section6')
      const bounding = section.getBoundingClientRect()

      if (
        bounding.top >= 0 &&
        bounding.top < 180 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        setCurrentSection('commander', tabs[selectedTab].id)
      }
    }
    if (!isSSR()) {
      global.window.addEventListener('scroll', checkIfItsInView)
    }

    return () => {
      global.window.removeEventListener('scroll', checkIfItsInView)
    }
  }, [selectedTab, canChangeRoute])

  const trackCTA = (text: string): void => {
    pushEvent({
      event: 'interaction',
      element: text,
      elementCategory: 'cta',
      pageSection: 'footer',
      pageSubsection: 'ctas',
      interactionType: 'clique',
    })
  }

  return (
    <section id="commander" className="section6">
      <h1>Tudo do Jeep Commander</h1>
      <TabManager tabs={tabs} />
      <div className="desktop-tab-content">
        <CurrentTabContent />
      </div>

      <div className="section6-links-wrapper">
        {MenuLink.map(link => (
          <Button
            key={link.name}
            text={link.name}
            link={link.link}
            icon={() => <RightSign />}
            onClick={() => trackCTA(link.name)}
          />
        ))}
      </div>
    </section>
  )
}
