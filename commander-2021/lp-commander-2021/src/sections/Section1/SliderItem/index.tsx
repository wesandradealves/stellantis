import { ResponsiveImage } from '../../../components/ResponsiveImage'
import PlusIcon from '/public/static/icons/cross.svg'
import { IModalContent } from '../types'
import { pushEvent } from '../../../utils/Tracking.Helpers'

export function SliderItem({
  onClick,
  sliderData,
}: {
  onClick: (props: IModalContent) => void
  sliderData: IModalContent
}) {
  const { thumbnails, header, alt, title } = sliderData

  return (
    <div
      role="button"
      className="slider-item"
      onClick={() => {
        onClick(sliderData)
        pushEvent({
          event: 'interaction',
          element: sliderData.header,
          elementCategory: 'card',
          pageSection: 'conteudo',
          pageSubsection: 'jeep-commander',
          interactionType: 'clique',
        })
      }}
    >
      <ResponsiveImage
        className="slider-thumb"
        queries={thumbnails}
        tag="div"
        alt={header}
        title={header}
      />
      <div className="slider-footer">
        <span>{header}</span>
        <div className="slider-square-plus-button">
          <PlusIcon />
        </div>
      </div>
    </div>
  )
}
