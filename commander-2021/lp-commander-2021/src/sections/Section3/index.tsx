import React, { useEffect, useState } from 'react'
import { RangeSlider } from '../../components/RangeSlider'
import { ResponsiveImage } from '../../components/ResponsiveImage'
import { InternalMock } from '../../mocks/internal'
import { isSSR, pushEvent } from '../../utils/Tracking.Helpers'
import { useAppStore } from '../../stores/app.store'
import { NewRangeSlider } from '../../components/RangeSlider/new'

export const Section3 = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { setCurrentSection, canChangeRoute } = useAppStore()

  useEffect(() => {
    const checkIfItsInView = () => {
      if (!canChangeRoute) return
      const section = document.querySelector<HTMLDivElement>('.section3')
      const bounding = section.getBoundingClientRect()

      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setCurrentSection('versatilidade')
      }
    }
    if (!isSSR()) {
      global.window.addEventListener('scroll', checkIfItsInView)
    }

    return () => {
      global.window.removeEventListener('scroll', checkIfItsInView)
    }
  }, [canChangeRoute])

  useEffect(() => {
    if (!isMounted) setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (isMounted) {
      pushEvent({
        event: 'interaction',
        element: `etapa-${currentSlide}`,
        elementCategory: 'stepper',
        pageSection: 'conteudo',
        pageSubsection: 'versatilidade',
        interactionType: 'clique',
      })
    }
  }, [currentSlide])

  return (
    <section id="versatilidade" className="section3">
      <div className="top-text text-block">
        <h3>A mais diversa combinação de assentos.</h3>
        <div className="bottom-text-desk text-block">
          <h4>
            O Jeep Commander comporta de maneira confortável até 7 adultos.
          </h4>
          <p>
            Sua segunda fileira de bancos se desloca até 14cm, seja para
            aumentar o volume do porta-malas, ou para proporcionar maior espaço
            de pernas. Além disso, os encostos da segunda e da terceira fila
            podem ser reclinados, proporcionando uma posição mais confortável a
            todos os passageiros.
          </p>
        </div>
      </div>
      <div className="car-wrapper">
        <div className="box-car">
          <div className="snap-content">
            <ResponsiveImage
              queries={InternalMock[currentSlide || 0]?.images}
              alt={`Assentos reclináveis - ${currentSlide + 1}`}
              title={`Assentos reclináveis - ${currentSlide + 1}`}
            />
          </div>
          <NewRangeSlider
            size={6}
            onChange={newStep => setCurrentSlide(newStep)}
          />
        </div>
      </div>
      <div className="bottom-text text-block">
        <h4>O Jeep Commander comporta de maneira confortável até 7 adultos.</h4>
        <p>
          Sua segunda fileira de bancos se desloca até 14cm, seja para aumentar
          o volume do porta-malas, ou para proporcionar maior espaço de pernas.
          Além disso, os encostos da segunda e da terceira fila podem ser
          reclinados, proporcionando uma posição mais confortável a todos os
          passageiros.
        </p>
      </div>
    </section>
  )
}
