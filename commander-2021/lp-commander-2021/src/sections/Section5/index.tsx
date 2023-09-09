import React, { useCallback, useEffect, useRef, useState } from 'react'
import useDownloader from 'react-use-downloader'
import { Button } from '../../components/Button'
import { ResponsiveImage } from '../../components/ResponsiveImage'
import { carGalleryImages, section5Images, zipGaleriaCompleta } from './constants'
import ArrowRight from '/public/static/icons/arrow-right.svg'
// import CloseIcon from '/public/static/icons/close.svg'
import OpenZoom from '/public/static/icons/zoom.svg'
import CloseIcon from '/public/static/icons/close-stroke.svg'
import CameraIcon from '/public/static/icons/camera.svg'
import GalleryIcon from '/public/static/icons/gallery.svg'
import { useModal } from '../../hooks/useModal'
import { ModalSection5 } from './ModalSection5'
import { useAppStore } from '../../stores/app.store'
import { isSSR, pushEvent } from '../../utils/Tracking.Helpers'

export const Section5 = (): JSX.Element => {
  const { setCurrentSection, canChangeRoute } = useAppStore()
  useEffect(() => {
    const checkIfItsInView = () => {
      if (!canChangeRoute) return
      const section = document.querySelector<HTMLDivElement>('.section5')
      const bounding = section.getBoundingClientRect()

      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom - (bounding.bottom / 100) * 20 <=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setCurrentSection('fotos')
      }
    }
    if (!isSSR()) {
      global.window.addEventListener('scroll', checkIfItsInView)
    }

    return () => {
      global.window.removeEventListener('scroll', checkIfItsInView)
    }
  }, [canChangeRoute])
  const modalRef = useRef<HTMLDivElement>()
  const zoomedRef = useRef(false)
  const galleryScrollRef = useRef<HTMLDivElement>(null)
  const { isOpen, openModal, ModalWrapper, closeModal } = useModal({
    bindToElement: modalRef.current,
    handleCloseModal: () => {
      pushEvent({
        event: 'interaction',
        element: `fechar-${imageIdxRef.current}`,
        elementCategory: 'icone',
        pageSection: 'conteudo',
        pageSubsection: 'fotos',
        interactionType: 'clique',
      })
    },
  })
  const lastStyleRef = useRef(null)
  const { download } = useDownloader()

  const [selectedImage, setSelectedImage] = useState(0)
  const evidenceImage = carGalleryImages[selectedImage]
  const imageIdxRef = useRef(0)

  const handleDownloadGallery = () => {
    download(zipGaleriaCompleta, 'imagens-jeep-commander.zip')
    pushEvent({
      event: 'interaction',
      element: `download-gallery-from-${selectedImage}`,
      elementCategory: 'icone',
      pageSection: 'conteudo',
      pageSubsection: 'fotos',
      interactionType: 'clique',
    })
  }

  const handleDownloadImage = () => {
    download(evidenceImage.queries[1].img, evidenceImage.queries[1].img)
    pushEvent({
      event: 'interaction',
      element: `download-image-${selectedImage}`,
      elementCategory: 'icone',
      pageSection: 'conteudo',
      pageSubsection: 'fotos',
      interactionType: 'clique',
    })
  }

  const handleSelectedImage = (index: number, image = true, track = true) => {
    imageIdxRef.current = index
    setSelectedImage(index)
    if (track) {
      pushEvent({
        event: 'interaction',
        element: `foto-${index}`,
        elementCategory: image ? 'image' : 'icone',
        pageSection: 'conteudo',
        pageSubsection: 'fotos',
        interactionType: 'clique',
      })
    }

    galleryScrollRef.current.scrollLeft = (index * 128) / 1.2
  }

  const handleOpenModal = useCallback(() => {
    openModal(document.getElementById('fotos'))
    pushEvent({
      event: 'interaction',
      element: `amplia-foto-${imageIdxRef.current}`,
      elementCategory: 'icone',
      pageSection: 'conteudo',
      pageSubsection: 'fotos',
      interactionType: 'clique',
    })
  }, [selectedImage])

  const handleZoom = () => {
    const evidencePicture = document?.getElementById('evidence-picture-modal')

    if (!zoomedRef.current) {
      lastStyleRef.current = {
        width: evidencePicture.style.width,
        height: evidencePicture.style.height,
        backgroundSize: evidencePicture.style.backgroundSize,
        cursor: evidencePicture.style.cursor,
      }

      zoomedRef.current = true
      evidencePicture.style.backgroundSize = 'cover'
      evidencePicture.style.cursor = 'zoom-out'
      return false
    }

    zoomedRef.current = false
    evidencePicture.style.width = lastStyleRef.current.width
    evidencePicture.style.height = lastStyleRef.current.height
    evidencePicture.style.position = lastStyleRef.current.position
    evidencePicture.style.backgroundSize = lastStyleRef.current.backgroundSize
    evidencePicture.style.cursor = lastStyleRef.current.cursor

    return false
  }

  return (
    <section id="fotos" className="section5">
      <ModalSection5
        ModalWrapper={ModalWrapper}
        isOpen={isOpen}
        selectedImage={selectedImage}
      >
        <>
          <div className="modal-evidence-header">
            <Button
              id="download"
              onClick={() => handleDownloadImage()}
              icon={() => <CameraIcon />}
              text="Baixar foto"
            />
            <Button
              id="download-all"
              onClick={() => handleDownloadGallery()}
              icon={() => <GalleryIcon />}
              text="Baixar galeria completa"
            />
            <Button
              onClick={() => {
                pushEvent({
                  event: 'interaction',
                  element: `fechar-${selectedImage}`,
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fotos',
                  interactionType: 'clique',
                })
                closeModal()
              }}
              icon={() => null}
              text={<CloseIcon />}
            />
          </div>
          <div className="modal-evidence-wrapper">
            <Button
              id="button-modal-desk-left"
              icon={() => <ArrowRight />}
              style={{ transform: 'rotateY(180deg)' }}
              onClick={() => {
                handleSelectedImage(
                  selectedImage === 0 ? 0 : selectedImage - 1,
                  false,
                  false,
                )
                pushEvent({
                  event: 'interaction',
                  element: `anterior`,
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fotos',
                  interactionType: 'clique',
                })
              }}
            />
            <ResponsiveImage
              id="evidence-picture-modal"
              className="evidence-picture"
              queries={evidenceImage.queries}
              alt={evidenceImage.alt}
              title={evidenceImage.title}
              tag="div"
              onClick={() => handleZoom()}
            />
            <Button
              id="button-modal-desk-right"
              icon={() => <ArrowRight />}
              onClick={() => {
                handleSelectedImage(
                  selectedImage === carGalleryImages.length - 1
                    ? carGalleryImages.length - 1
                    : selectedImage + 1,
                  false,
                  false,
                )
                pushEvent({
                  event: 'interaction',
                  element: `proximo`,
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fotos',
                  interactionType: 'clique',
                })
              }}
            />
          </div>
          <div className="gallery-dots-wrapper">
            <Button
              icon={() => <ArrowRight />}
              style={{ transform: 'rotateY(180deg)' }}
              onClick={() => {
                handleSelectedImage(
                  selectedImage === 0 ? 0 : selectedImage - 1,
                  false,
                  false,
                )
                pushEvent({
                  event: 'interaction',
                  element: `anterior`,
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fotos',
                  interactionType: 'clique',
                })
              }}
            />
            <ul className="gallery-dots">
              {carGalleryImages.map((currentCarDot, idx) => {
                const isActive = selectedImage === idx

                return (
                  <li key={idx} className={`${isActive ? 'active' : null}`}>
                    <a onClick={() => handleSelectedImage(idx)}>
                      {currentCarDot.alt}
                    </a>
                  </li>
                )
              })}
            </ul>
            <Button
              icon={() => <ArrowRight />}
              onClick={() => {
                handleSelectedImage(
                  selectedImage === carGalleryImages.length - 1
                    ? carGalleryImages.length - 1
                    : selectedImage + 1,
                  false,
                  false,
                )
                pushEvent({
                  event: 'interaction',
                  element: `proximo`,
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection: 'fotos',
                  interactionType: 'clique',
                })
              }}
            />
          </div>
        </>
      </ModalSection5>
      <h2>Veja todas as fotos do Jeep Commander</h2>
      <div ref={modalRef} className="section5-content">
        <div className="first-part">
          <div>
            <ResponsiveImage
              className="evidence-picture"
              queries={evidenceImage.queries}
              alt={evidenceImage.alt}
              title={evidenceImage.title}
              onClick={() => handleZoom}
              tag="div"
            />
            <ResponsiveImage
              className="evidence-picture-img"
              queries={evidenceImage.queries}
              alt={evidenceImage.alt}
              title={evidenceImage.title}
              onClick={() => handleZoom}
              tag="img"
            />
          </div>
          <div className="open-zoom-button" onClick={() => handleOpenModal()}>
            <OpenZoom />
          </div>
        </div>
        <div ref={galleryScrollRef} className="second-part">
          <div className="car-gallery">
            {carGalleryImages.map((currentCarGallery, idx) => {
              const { title, alt, queries } = currentCarGallery
              const isActive = selectedImage === idx

              return (
                <div
                  key={idx}
                  className={`thumb ${isActive ? 'active-border-bottom' : ''}`}
                >
                  <ResponsiveImage
                    className="gallery-picture"
                    queries={[{ img: section5Images[`car${idx + 1}`]?.original, size: 0 }]}
                    alt={alt}
                    title={title}
                    onClick={() => handleSelectedImage(idx)}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="gallery-dots-wrapper">
          <Button
            icon={() => <ArrowRight />}
            style={{ transform: 'rotateY(180deg)' }}
            onClick={() => {
              handleSelectedImage(
                selectedImage === 0 ? 0 : selectedImage - 1,
                false,
                false,
              )
              pushEvent({
                event: 'interaction',
                element: `anterior`,
                elementCategory: 'icone',
                pageSection: 'conteudo',
                pageSubsection: 'fotos',
                interactionType: 'clique',
              })
            }}
          />
          <ul className="gallery-dots">
            {carGalleryImages.map((currentCarDot, idx) => {
              const isActive = selectedImage === idx

              return (
                <li key={idx} className={`${isActive ? 'active' : null}`}>
                  <a onClick={() => handleSelectedImage(idx, false)}>
                    {currentCarDot.alt}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button
            icon={() => <ArrowRight />}
            onClick={() => {
              const idxCurrent =
                selectedImage === carGalleryImages.length - 1
                  ? carGalleryImages.length - 1
                  : selectedImage + 1
              handleSelectedImage(idxCurrent, false, false)
              pushEvent({
                event: 'interaction',
                element: `proximo`,
                elementCategory: 'icone',
                pageSection: 'conteudo',
                pageSubsection: 'fotos',
                interactionType: 'clique',
              })
            }}
          />
        </div>
      </div>
    </section>
  )
}
