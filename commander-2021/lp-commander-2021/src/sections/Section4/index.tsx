import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { ResponsiveImage } from '../../components/ResponsiveImage'
import ArrowRight from '/public/static/icons/right-sign.svg'
import ChevronDown from '/public/static/icons/arrow-down.svg'
import { SliderItem } from './SliderItem'
import { JeepSwiper, TSwiperItem } from '../../components/Swiper'
import { IModels, Models } from '../../mocks/models'
import { TRoutes, useAppStore } from '../../stores/app.store'
import { pushEvent } from '../../utils/Tracking.Helpers'
import { isSSR } from '../../utils/Tracking.Helpers'
import { scrollTo } from '../../utils/Routing.Helpers'

const swiperItems: TSwiperItem[] = Models.map(model => {
  return {
    sliderData: {
      images: model.images,
      text: model.model,
      ref: model.ref,
    },
    Component: ({ active, onClick, swiperItem }) => {
      return (
        <SliderItem
          onClick={() => {
            if (onClick) onClick()
            pushEvent({
              event: 'interaction',
              element: model.model,
              elementCategory: 'card',
              pageSection: 'conteudo',
              pageSubsection: 'todas-as-versoes',
              interactionType: 'clique',
            })
          }}
          sliderData={{
            className: active ? 'active' : '',
            images: model.images,
            title: model.title,
            text: model.model,
            ref: model.ref,
          }}
        />
      )
    },
  }
})

export const Section4 = (): JSX.Element => {
  const [current, setCurrent] = useState(0)
  const { setCurrentSection, setCurrentVersao, currentVersao, canChangeRoute } =
    useAppStore()

  useEffect(() => {
    const checkIfItsInView = () => {
      if (!canChangeRoute) return
      const section = document.querySelector<HTMLDivElement>('.section4')
      const bounding = section.getBoundingClientRect()

      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom - (bounding.bottom / 100) * 30 <=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setCurrentSection(currentVersao as TRoutes)
      }
    }
    if (!isSSR()) {
      global.window.addEventListener('scroll', checkIfItsInView)
    }

    return () => {
      global.window.removeEventListener('scroll', checkIfItsInView)
    }
  }, [canChangeRoute, currentVersao])

  const handleChevronClick = () => {
    if (!isSSR()) {
      window.history.pushState(null, 'RESERVA', `#${currentVersao}`)
      scrollTo(global.document.querySelector<HTMLDivElement>('#versoes'))
    }
  }

  const getCurrentVersao = (): IModels =>
    Models.filter(model => `${model.ref}` === currentVersao)?.[0]

  return (
    <section id="versoes" className="section4">
      <div className="faixa-top">
        <ResponsiveImage
          alt={`Jeep Commander - ${getCurrentVersao()?.title}`}
          queries={[
            { img: '/static/images/section4/texture-top@2x.jpg', size: 0 },
            { img: '/static/images/section4/texture-top@2x.jpg', size: 1000 },
          ]}
        />
        <div>
          <p>
            Conheça todas as versões <br />
            do Jeep Commander
          </p>
          <ChevronDown />
        </div>
      </div>
      <div className="top">
        <div className="info">
          <h2>
            JEEP COMMANDER
            <br />
            {getCurrentVersao()?.title}
          </h2>
          <ul>
            {getCurrentVersao()?.description.map(desc => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </div>
        <ResponsiveImage
          className="bg-top"
          alt={`Jeep Commander - ${getCurrentVersao()?.title}`}
          queries={[
            { img: '/static/images/section4/top-bg.jpg', size: 0 },
            { img: '/static/images/section4/top-bg@2x.jpg', size: 768 },
          ]}
        />
        <div onClick={handleChevronClick} className="chevron-click">
          <span>Conheça todas as versões do Jeep Commander</span>
          <ChevronDown />
        </div>
        <ResponsiveImage
          className="car"
          queries={getCurrentVersao()?.car}
          alt={`Jeep Commander - ${getCurrentVersao()?.title}`}
          title={`Jeep Commander - ${getCurrentVersao()?.title}`}
        />
      </div>
      <div className="bottom">
        <div className="info">
          <h2>
            JEEP COMMANDER
            <br />
            {getCurrentVersao()?.title}
          </h2>
          <ul>
            {getCurrentVersao()?.description.map(desc => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </div>
        <div>
          <JeepSwiper
            className="section4-swiper"
            swiperItems={swiperItems}
            current={currentVersao}
            setCurrent={current => {
              if (typeof current === 'string') {
                window.history.pushState(
                  null,
                  'TODAS AS VERSÕES',
                  `#${current}`,
                )
                setCurrentVersao(current)
              } else setCurrent(current)
            }}
          />
        </div>
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
              pageSubsection: 'todas-as-versoes',
              interactionType: 'clique',
            })
          }}
        />
      </div>
      <div className="faixa-bottom">
        <ResponsiveImage
          alt={`Jeep Commander - ${getCurrentVersao()?.title}`}
          queries={[
            { img: '/static/images/section4/texture.jpg', size: 0 },
            //{ img: '/static/images/section4/texture@2x.jpg', size: 1000 },
          ]}
        />
      </div>
    </section>
  )
}
