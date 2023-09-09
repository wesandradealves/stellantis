import { Button } from '../../components/Button'
import { ResponsiveImage } from '../../components/ResponsiveImage'
import { useSection6Store } from './useSection6Store'
import ArrowRight from '/public/static/icons/arrow-right.svg'
import { pushEvent } from '../../utils/Tracking.Helpers'

export function TabComponent({ carGalleryImages }) {
  const { selectedImage, setSelectedImage, selectedTab, setSelectedTab, tabs } =
    useSection6Store()

  const activeTab = carGalleryImages[selectedImage]

  const handleSelectedImage = (
    index: number,
    direction: 'proximo' | 'anterior' = 'anterior',
    fromDots: boolean = false,
  ) => {
    if (!fromDots) {
      pushEvent({
        event: 'interaction',
        element: direction,
        elementCategory: 'icone',
        pageSection: 'tudo-do-commander',
        pageSubsection: activeTab.title,
        interactionType: 'clique',
      })
    } else {
      pushEvent({
        event: 'interaction',
        element: `item-${index}`,
        elementCategory: 'icone',
        pageSection: 'tudo-do-commander',
        pageSubsection: activeTab.title,
        interactionType: 'clique',
      })
    }
    setSelectedImage(index)
  }

  const hasNext =
    selectedTab < tabs.length - 1 &&
    selectedImage === carGalleryImages.length - 1 &&
    selectedTab <= tabs.length
  const hasPrevious = selectedTab > 0
  return activeTab ? (
    <div className="tab-element">
      <div className="tab-element-picture">
        <ResponsiveImage
          className="evidence-picture"
          queries={activeTab.queries}
          alt={activeTab.subtitle}
          title={activeTab.subtitle}
          tag="div"
        />
        <ResponsiveImage
          className="evidence-picture-img"
          queries={activeTab.queries}
          alt={activeTab.subtitle}
          title={activeTab.subtitle}
          tag="img"
        />
        <div>
          {
            activeTab.label !== undefined
              ? activeTab.label
              : ("")
          }
        </div>
      </div>

      <div className="tab-element-footer">
        <div className="gallery-dots-wrapper">
          <Button
            icon={() => <ArrowRight />}
            style={{ transform: 'rotateY(180deg)' }}
            disabled={selectedImage === 0}
            onClick={() =>
              handleSelectedImage(
                selectedImage === 0 ? 0 : selectedImage - 1,
                'anterior',
              )
            }
          />
          <ul className="gallery-dots">
            {carGalleryImages.map((currentCarDot, idx) => {
              const isActive = selectedImage === idx

              return (
                <li key={idx} className={`${isActive ? 'active' : null}`}>
                  <a onClick={() => handleSelectedImage(idx, 'anterior', true)}>
                    {currentCarDot.alt}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button
            icon={() => <ArrowRight />}
            disabled={selectedImage === carGalleryImages.length - 1}
            onClick={() =>
              handleSelectedImage(
                selectedImage === carGalleryImages.length - 1
                  ? carGalleryImages.length - 1
                  : selectedImage + 1,
                'proximo',
              )
            }
          />
        </div>
        <div className="tab-element-info-wrapper">
          <div className="tab-element-info">
            <h2>{activeTab.title}</h2>
            <sub>{activeTab.subtitle}</sub>
            <p dangerouslySetInnerHTML={{ __html: activeTab.description }} />
          </div>
          <div className="gallery-control-buttons">
            <div className="gallery-dots-wrapper-desk">
              <ul className="gallery-dots-desk">
                {carGalleryImages.map((modalContentMapKey, idx) => {
                  const isActive = selectedImage === idx

                  return (
                    <li key={idx} className={`${isActive ? 'active' : null}`}>
                      <a
                        onClick={() =>
                          handleSelectedImage(idx, 'anterior', true)
                        }
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="modal-card-desk">
              <Button
                disabled={selectedImage === 0 && !hasPrevious}
                icon={() => <ArrowRight />}
                style={{ transform: 'rotateY(180deg)' }}
                onClick={() => {
                  if (selectedImage === 0 && hasPrevious) {
                    setSelectedTab(selectedTab - 1)
                    return handleSelectedImage(0, 'anterior')
                  }

                  handleSelectedImage(
                    selectedImage === 0 ? 0 : selectedImage - 1,
                    'anterior',
                  )
                }}
              />
              <Button
                disabled={
                  selectedImage === carGalleryImages.length - 1 && !hasNext
                }
                icon={() => <ArrowRight />}
                onClick={() => {
                  if (
                    selectedImage === carGalleryImages.length - 1 &&
                    hasNext
                  ) {
                    setSelectedTab(selectedTab + 1)
                    return handleSelectedImage(0, 'proximo')
                  }

                  return handleSelectedImage(
                    selectedImage === carGalleryImages.length - 1
                      ? carGalleryImages.length - 1
                      : selectedImage + 1,
                    'proximo',
                  )
                }}
              />
              <div>
                {hasNext && (
                  <>
                    <span>Próximo:</span>
                    <p>
                      {
                        tabs[
                          selectedTab === tabs.length - 1
                            ? tabs.length - 1
                            : selectedTab + 1
                        ].title
                      }
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}
