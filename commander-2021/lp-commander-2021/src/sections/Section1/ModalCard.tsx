import ArrowRight from '/public/static/icons/arrow-right.svg'
import CloseIcon from '/public/static/icons/close.svg'
import {Button} from '../../components/Button'
import {ResponsiveImage} from '../../components/ResponsiveImage'
import {IModalContent} from './types'
import {pushEvent} from '../../utils/Tracking.Helpers'

export function ModalCard({
                            modalContentMap,
                            modalContent,
                            handleChangeContent,
                            handleCloseModal,
                          }: {
  modalContentMap: any
  modalContent: IModalContent
  handleChangeContent: (newModalContent: IModalContent) => void
  handleCloseModal: () => void
}) {
  const {header, infoList, getNext, getPrevious, modalImg, title, alt, id} =
    modalContent

  const hasNext = getNext()
  const hasPrevious = getPrevious()

  return (
    <div className="modal-card">
      <div className="modal-card-header">
        <span>Fechar</span>
        <Button
          onClick={handleCloseModal}
          icon={() => null}
          text={<CloseIcon/>}
        />
      </div>
      <ResponsiveImage
        className="modal-card-image"
        queries={modalImg}
        alt={header}
        title={header}
      />
      <div className="modal-card-info">
        <div>
          <h1>{header}</h1>
          {infoList && <p>{infoList}</p>}
          {id === 4 && (
            <>
              <br/>
              <p style={{fontSize: '14px'}}>* Alexa in Vehicle disponível apenas para a versão Jeep Commander Overland e depende de conexão com
                internet (WiFi Hotspot Embarcado) para ser utilizada.
              </p>
            </>
          )}
        </div>
        <div className="modal-card-buttons">
          <div className="modal-card-mobile">
            <ul className="gallery-dots">
              {Object.keys(modalContentMap).map((modalContentMapKey, idx) => {
                const isActive =
                  modalContent.header ===
                  modalContentMap[modalContentMapKey].header

                return (
                  <li key={idx} className={`${isActive ? 'active' : null}`}>
                    <a
                      onClick={() => {
                        handleChangeContent(modalContentMap[modalContentMapKey])
                        pushEvent({
                          event: 'interaction',
                          element: `item-${idx}`,
                          elementCategory: 'icone',
                          pageSection: 'jeep-commander',
                          pageSubsection: modalContent?.header,
                          interactionType: 'clique',
                        })
                      }}
                    />
                  </li>
                )
              })}
            </ul>
            {hasNext && (
              <div>
                <span>{hasNext.header}</span>
                <Button
                  disabled={!hasNext}
                  icon={() => <ArrowRight/>}
                  onClick={() => {
                    if (hasNext) {
                      pushEvent({
                        event: 'interaction',
                        element: 'proximo',
                        elementCategory: 'icone',
                        pageSection: 'jeep-commander',
                        pageSubsection: modalContent?.header,
                        interactionType: 'clique',
                      })
                      handleChangeContent(hasNext)
                    }
                  }}
                />
              </div>
            )}
          </div>
          <div className="modal-card-desk">
            <Button
              disabled={!hasPrevious}
              icon={() => <ArrowRight/>}
              style={{transform: 'rotateY(180deg)'}}
              onClick={() => {
                if (hasPrevious) {
                  pushEvent({
                    event: 'interaction',
                    element: 'anterior',
                    elementCategory: 'icone',
                    pageSection: 'jeep-commander',
                    pageSubsection: modalContent?.header,
                    interactionType: 'clique',
                  })
                  handleChangeContent(hasPrevious)
                }
              }}
            />
            <Button
              disabled={!hasNext}
              icon={() => <ArrowRight/>}
              onClick={() => {
                if (hasNext) {
                  pushEvent({
                    event: 'interaction',
                    element: 'proximo',
                    elementCategory: 'icone',
                    pageSection: 'jeep-commander',
                    pageSubsection: modalContent?.header,
                    interactionType: 'clique',
                  })
                  handleChangeContent(hasNext)
                }
              }}
            />
            <div>
              {hasNext && (
                <>
                  <span>Próximo:</span>
                  <p>{hasNext.header}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
