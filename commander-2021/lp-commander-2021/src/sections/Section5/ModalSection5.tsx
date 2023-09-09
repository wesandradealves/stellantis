export function ModalSection5({
  children,
  ModalWrapper,
  isOpen,
  selectedImage,
}: any) {
  return (
    isOpen && (
      <ModalWrapper
        className="section5-modal-wrapper"
        backdrop
        fade
        selectedImage={selectedImage}
      >
        {children}
      </ModalWrapper>
    )
  )
}
