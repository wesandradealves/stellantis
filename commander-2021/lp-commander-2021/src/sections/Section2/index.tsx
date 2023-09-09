import React, { useEffect } from 'react'
import { Button } from '../../components/Button'
import { ResponsiveImage } from '../../components/ResponsiveImage'
import { isSSR, pushEvent } from '../../utils/Tracking.Helpers'
import { useAppStore } from '../../stores/app.store'
import { section2Images } from './constants'
import ArrowRight from '/public/static/icons/right-sign.svg'

const queryCarImg = [
  { img: section2Images.car.original, size: 0 },
  { img: section2Images.car.extended, size: 700 },
]

export const Section2 = (): JSX.Element => {
  const { setCurrentSection, canChangeRoute } = useAppStore()

  useEffect(() => {
    const checkIfItsInView = () => {
      if (!canChangeRoute) return
      const section = document.querySelector<HTMLDivElement>('.section2')
      const bounding = section.getBoundingClientRect()

      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
        (window.innerHeight - window.innerHeight * 0.2 ||
          document.documentElement.clientHeight)
      ) {
        setCurrentSection('reserva')
      }
    }
    if (!isSSR()) {
      global.window.addEventListener('scroll', checkIfItsInView)
    }

    return () => {
      global.window.removeEventListener('scroll', checkIfItsInView)
    }
  }, [canChangeRoute])

  return (
    <section id="reserva" className="section2">
      <div>
        <h2 className="mobile">
          GARANTA O SEU JEEP
          <br /> COMMANDER E VIVA UMA
          <br /> OUTRA DIMENSÃO DE AVENTURA.
        </h2>
        <ResponsiveImage
          queries={queryCarImg}
          alt="Jeep Commander"
          title="GARANTA O SEU JEEP COMMANDER E VIVA UMA OUTRA DIMENSÃO DE AVENTURA."
        />
      </div>
      <div>
        <h2 className="desk">
          GARANTA O SEU JEEP
          <br /> COMMANDER E VIVA UMA
          <br /> OUTRA DIMENSÃO DE AVENTURA.
        </h2>
        <Button
          text="Monte o seu"
          icon={() => <ArrowRight />}
          link="https://commander.jeep.com.br/monte.html#versao"
          size="big"
          onClick={() => {
            pushEvent({
              event: 'interaction',
              element: 'compre-o-seu',
              elementCategory: 'cta',
              pageSection: 'conteudo',
              pageSubsection: 'reserva',
              interactionType: 'clique',
            })
          }}
        />
        <Button
          text="Compre o seu"
          icon={() => <ArrowRight />}
          link="https://www.jeep.com.br/formularios/quero-comprar-jeep-commander.html"
          size="big"
          className="assine"
          onClick={() => {
            pushEvent({
              event: 'interaction',
              element: 'assine-o-seu',
              elementCategory: 'cta',
              pageSection: 'conteudo',
              pageSubsection: 'reserva',
              interactionType: 'clique',
            })
          }}
        />
      </div>
    </section>
  )
}
