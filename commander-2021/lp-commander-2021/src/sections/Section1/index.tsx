import { useEffect, useMemo, useRef, useState } from 'react'
import { modalContentMap } from './constants'
import { JeepSwiper, TSwiperItem } from '../../components/Swiper'

import { useModal } from '../../hooks/useModal'

import { ResponsiveImage } from '../../components/ResponsiveImage'
import { IModalContent } from './types'
import ChevronDown from '/public/static/icons/arrow-down.svg'
import SwipeHand from '/public/static/icons/hand-swipe.svg'
import Left from '/public/static/icons/small-left.svg'
import Right from '/public/static/icons/small-right.svg'
import Crossed from '/public/static/icons/crossed-lines.svg'
import { pushEvent } from '../../utils/Tracking.Helpers'
import { useAppStore } from '../../stores/app.store'
import { isSSR } from '../../utils/Tracking.Helpers'
import { scrollTo } from '../../utils/Routing.Helpers'
import { ModalCard } from './ModalCard'
import { SliderItem } from './SliderItem'

export function Section1() {
  const modalRef = useRef<HTMLDivElement>(null)
  const [modalContent, setModalContent] = useState<IModalContent | null>(null)
  const handleCloseModal = () => {
    if (modalContent?.header) {
      pushEvent({
        event: 'interaction',
        element: 'fechar',
        elementCategory: 'icone',
        pageSection: 'jeep-commander',
        pageSubsection: modalContent.header,
        interactionType: 'clique',
      })
    }
    setModalContent(() => {
      return null
    })
  }
  const { isOpen, openModal, ModalWrapper, closeModal } = useModal({
    bindToElement: modalRef.current,
    handleCloseModal: handleCloseModal,
  })
  const { setCurrentSection, canChangeRoute } = useAppStore()

  useEffect(() => {
    const checkIfItsInView = () => {
      if (!canChangeRoute) return
      const section = document.querySelector<HTMLDivElement>('.section1')
      const bounding = section.getBoundingClientRect()

      if (
        Math.abs(bounding.top) <=
          bounding.height - (bounding.height / 100) * 40 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setCurrentSection('/')
      }
    }
    if (!isSSR()) {
      global.window.addEventListener('scroll', checkIfItsInView)
    }

    return () => {
      global.window.removeEventListener('scroll', checkIfItsInView)
    }
  }, [canChangeRoute])

  const handleModalOpen = newContentModal => {
    setModalContent(newContentModal)
  }

  const handleChangeContent = (newModalContent: IModalContent) => {
    setModalContent(newModalContent)
  }

  useEffect(() => {
    if (modalContent) {
      return openModal(document.getElementById('jeep-commander'))
    }

    return closeModal()
  }, [modalContent])

  const swiperItems: TSwiperItem[] = useMemo(
    () => [
      {
        Component: () => (
          <SliderItem
            onClick={handleModalOpen}
            sliderData={modalContentMap.sofisticacao}
          />
        ),
      },
      {
        Component: () => (
          <SliderItem
            onClick={handleModalOpen}
            sliderData={modalContentMap.conforto}
          />
        ),
      },
      {
        Component: () => (
          <SliderItem
            onClick={handleModalOpen}
            sliderData={modalContentMap.design}
          />
        ),
      },
      {
        Component: () => (
          <SliderItem
            onClick={handleModalOpen}
            sliderData={modalContentMap.torque}
          />
        ),
      },
      {
        Component: () => (
          <SliderItem
            onClick={handleModalOpen}
            sliderData={modalContentMap.conectividade}
          />
        ),
      },
    ],
    [],
  )

  const handleChevronClick = () => {
    if (!isSSR()) {
      window.history.pushState(null, 'RESERVA', '#reserva')
      scrollTo(global.document.querySelector<HTMLDivElement>('#reserva'))
    }
  }

  return (
    <section ref={modalRef} id="jeep-commander" className="section1">
      {isOpen && modalContent && (
        <ModalWrapper className="modal-wrapper" backdrop fade>
          <ModalCard
            modalContentMap={modalContentMap}
            modalContent={modalContent}
            handleChangeContent={handleChangeContent}
            handleCloseModal={handleCloseModal}
          />
        </ModalWrapper>
      )}
      <div className="header-text">
        <div>
          <Crossed />
          <div>
            <h2>UMA NOVA DIMENSÃO VAI SE ABRIR NAS SUAS AVENTURAS.</h2>
            <div>
              <Left />
              <Right />
            </div>
          </div>
          <Crossed />
        </div>
      </div>
      {/* <div className="highlight">
        <h1>
          JEEP
          <br /> COMMANDER.
        </h1>
      </div> */}
      <ResponsiveImage
        className="hidden"
        alt="Jeep Commander"
        title="Jeep Commander"
        queries={[
          { img: '/static/images/section1/bg-mobile@2x.jpg', size: 0 },
          { img: '/static/images/section1/bg-mobile@2x.jpg', size: 540 },
          { img: '/static/images/section1/hero-bg-desktop@2x.jpg', size: 768 },
          { img: '/static/images/section1/hero-bg-desktop@2x.jpg', size: 1400 },
        ]}
      />
      <div className="section1-wrapper">
        <div className="swipe-message">
          <p>Arraste e veja as novidades</p>
          <SwipeHand />
        </div>
        <JeepSwiper className="jeep-swiper" swiperItems={swiperItems} />
        <a onClick={handleChevronClick} className="encante-se">
          <span>Encante-se</span>
          <ChevronDown />
        </a>
      </div>
    </section>
  )
}
