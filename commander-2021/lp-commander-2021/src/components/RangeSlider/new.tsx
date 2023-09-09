import React, { useCallback, useState } from 'react'
import 'rc-slider/assets/index.css'
import Slider, { Handle, SliderTooltip } from 'rc-slider'
import IcoTouch from '/public/static/icons/touch-range.svg'
import IcoTouchHover from '/public/static/icons/touch-range-hover.svg'

export const NewRangeSlider = ({
  size,
  onChange,
}: {
  size: number
  onChange: (newValue: number) => void
}) => {
  const [prevDot, setPrevDot] = useState(0)

  const getBreakpoints = useCallback(() => {
    return new Array(size).fill('').reduce((prev, current, index) => {
      prev[index] = index
      return prev
    }, {})
  }, [size])

  const handle = props => {
    const { value, dragging, index, ...restProps } = props

    if (prevDot !== value) {
      setPrevDot(value)
      onChange?.(value)
    }

    return (
      <div
        className="drag-track"
        style={{ left: `${(100 / (size - 1)) * value}%` }}
      >
        <IcoTouch className={`${dragging ? 'hide' : ''}`} />
        <IcoTouchHover className={`${dragging ? '' : 'hide'}`} />
      </div>
    )
  }

  return (
    <Slider
      className="range-slider-new"
      min={0}
      max={size - 1}
      defaultValue={0}
      marks={getBreakpoints()}
      step={null}
      handle={handle}
    />
  )
}
