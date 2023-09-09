import {
  createElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { pushEvent } from '../utils/Tracking.Helpers'

type TChildren = JSX.Element | JSX.Element[] | ReactNode | string | number | any
export type TModalWrapper = {
  children: TChildren
  backdrop?: boolean
  fade?: boolean
  className?: string
  controlId?: string | string[]
}

const fadeStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(63, 59, 57, 0.8)',
  zIndex: 100,
  WebkitBackfaceVisibility: 'hidden',
}

function WithClickOutside(
  children: TChildren,
  fade = true,
  onClickOutside: (_?: any, callClose?: boolean) => void,
  className?: string,
  controlId?: string | string[],
) {
  const outRef = useRef<HTMLDivElement>()

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const element = e.target as Element
      const isControl = element.id !== '' && controlId?.includes(element.id)
      const isAlert = element.classList.toString().includes('alert')

      if (
        outRef.current &&
        !outRef.current.contains(element) &&
        !isControl &&
        !isAlert
      ) {
        onClickOutside(undefined, false)
      }
    },
    [controlId, onClickOutside],
  )
  const handleClickOnFade = useCallback(
    (e: MouseEvent) => {
      const element = e.target as Element
      if (element && element.id === 'fade') {
        pushEvent({
          event: 'interaction',
          element: 'fechar',
          elementCategory: 'icone',
          pageSection: 'jeep-commander',
          pageSubsection: children?.props?.modalContent?.header,
          interactionType: 'clique',
        })
        return onClickOutside(undefined, true)
      }
    },
    [onClickOutside],
  )
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClickOutside(undefined, true)
      }
    },
    [onClickOutside],
  )

  useEffect(() => {
    global.document.addEventListener('mousedown', handleClickOutside)
    global.document.addEventListener('mousedown', handleClickOnFade)
    global.document.addEventListener('keydown', handleKeyDown)
    return () => {
      global.document.removeEventListener('mousedown', handleClickOutside)
      global.document.removeEventListener('mousedown', handleClickOnFade)
      global.document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClickOnFade, handleClickOutside, handleKeyDown])

  const divProps = {
    id: 'fade',
    style: fade ? fadeStyle : null,
    ref: outRef,
    className: className ? className : '',
  }
  return createElement('div', divProps, children)
}

export function useModal({
  bindToElement,
  handleCloseModal,
}: {
  bindToElement: Element
  handleCloseModal?: (el?: any) => void
}) {
  const [isOpen, setModalOpen] = useState(false)
  let bindToElementSsr = bindToElement

  const openModal = useCallback(
    (newBindToElement = undefined) => {
      bindToElementSsr = newBindToElement || bindToElement
      global.document.body.style.overflowY = 'hidden'
      if (bindToElementSsr) setModalOpen(true)
    },
    [bindToElement],
  )

  const closeModal = useCallback(
    (newBindToElement = undefined, callClose = false) => {
      bindToElementSsr = newBindToElement || bindToElement
      if ((newBindToElement || callClose) && handleCloseModal)
        handleCloseModal()
      if (bindToElementSsr) setModalOpen(false)
      global.document.body.style.overflowY = 'auto'
    },
    [bindToElement],
  )

  const ModalWrapper = useCallback(
    ({ children, backdrop, fade, className, controlId }: TModalWrapper) => {
      if (!bindToElementSsr) return null
      const returnChildren = backdrop
        ? WithClickOutside(children, fade, closeModal, className, controlId)
        : children

      return createPortal(
        returnChildren,
        bindToElementSsr || global?.document?.createElement('div'),
      )
    },
    [bindToElementSsr, closeModal],
  )

  return useMemo(
    () => ({ ModalWrapper, isOpen, openModal, closeModal }),
    [ModalWrapper, closeModal, isOpen, openModal],
  )
}
