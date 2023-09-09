import { ResponsiveImage } from '../../../components/ResponsiveImage'
import { ISlideSection4 } from '../types'

export function SliderItem({
  onClick,
  sliderData,
}: {
  onClick: (props: any) => void
  sliderData: ISlideSection4
}) {
  const { images, text, className } = sliderData

  return (
    <div className={`slider-item ${className || ''}`} onClick={onClick}>
      <ResponsiveImage
        className="slider-thumb"
        queries={images}
        alt={`Jeep Commander - ${sliderData.title}`}
        title={`Jeep Commander - ${sliderData.title}`}
      />
      <p>{text}</p>
    </div>
  )
}
