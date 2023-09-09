import React, { useEffect, useRef, useState } from 'react'
import IcoTouch from '/public/static/icons/touch-range.svg'
import IcoTouchHover from '/public/static/icons/touch-range-hover.svg'
import { isMobile } from 'react-device-detect'

type TRangeSliderProps = {
  className?: string
  steps: number
  onChangeStep?: (newStep: number, prevStep: number) => void
}

type TStepsSettings = {
  step: number
  bullet: number
}

type TRangePositions = {
  isDown: boolean
  startX?: number
  scrollLeft?: number
  limit?: number
}

export const RangeSlider = ({
  className,
  steps = 5,
  onChangeStep,
}: TRangeSliderProps) => {
  const rangeBtnRef = useRef<HTMLDivElement>()
  const rangeHolder = useRef<HTMLDivElement>()
  const [currentStep, setCurrentStep] = useState(0)
  const [stepsSettings, setStepsSettings] = useState<TStepsSettings[]>([])
  const [rangePositions, setRangePositions] = useState<TRangePositions>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  })

  useEffect(() => {
    const limit = rangeHolder?.current.getBoundingClientRect().width
    setRangePositions({
      isDown: false,
      startX: rangeBtnRef?.current.getBoundingClientRect().x,
      scrollLeft: 0,
      limit,
    })

    setStepsSettings(() => {
      return new Array(steps).fill(0).map((step, idx) => {
        return {
          step: idx,
          bullet: idx * (limit / (steps - 1)),
        }
      })
    })

    const onResize = e =>
      setRangePositions(prev => ({
        ...prev,
        limit: rangeHolder?.current.getBoundingClientRect().width,
      }))

    global.window.addEventListener('resize', onResize)

    return () => global.window.removeEventListener('resize', onResize)
  }, [])

  const onMouseDown = e => {
    setRangePositions(prev => ({
      ...prev,
      isDown: true,
      startX: rangeBtnRef?.current.getBoundingClientRect().x,
    }))
  }

  const goToStep = (step: TStepsSettings) => {
    const prevX = rangeBtnRef.current.style.left
      ? parseInt(rangeBtnRef.current.style.left.replace('px', ''), 10)
      : 0

    const dist = rangePositions.limit / (steps - 1) / 2
    rangeBtnRef.current.style.left = `${step?.bullet || 0}px`

    setRangePositions(prev => ({
      ...prev,
      isDown: false,
      startX: rangeBtnRef?.current.getBoundingClientRect().x,
      scrollLeft: prevX,
    }))
  }

  useEffect(() => {
    const handleMouseUp = e => {
      if (!rangePositions.isDown && e.type !== 'resize') return

      const prevX = rangeBtnRef.current.style.left
        ? parseInt(rangeBtnRef.current.style.left.replace('px', ''), 10)
        : 0

      // if (e.type === 'resize') {
      //   rangeBtnRef.current.style.left = `0px`
      //   setRangePositions(prev => ({
      //     ...prev,
      //     isDown: false,
      //     startX: rangeBtnRef?.current.getBoundingClientRect().x,
      //     scrollLeft: prevX,
      //   }))
      //   return
      // }

      const dist = rangePositions.limit / (steps - 1) / 2
      const toSnap = stepsSettings.filter(
        (step, idx) => Math.abs(prevX - step.bullet) <= dist,
      )?.[0]?.step

      rangeBtnRef.current.style.left = `${
        stepsSettings?.[toSnap || 0]?.bullet || 0
      }px`

      setRangePositions(prev => ({
        ...prev,
        isDown: false,
        startX: rangeBtnRef?.current.getBoundingClientRect().x,
        scrollLeft: prevX,
      }))
    }
    const handleMouseMove = e => {
      if (!rangeBtnRef?.current) return
      if (!rangePositions.isDown) return

      let pageX
      if (e.type === 'touchmove') {
        pageX = e.touches[0].pageX
      } else {
        e.preventDefault()
        pageX = e.pageX
      }
      let x = pageX - rangePositions.startX
      const diff = rangePositions.scrollLeft + x
      x = diff < 0 ? 0 : diff
      if (diff >= rangePositions.limit) {
        x = rangePositions.limit
      }

      rangeBtnRef.current.style.left = `${x}px`
      setRangePositions(prev => ({
        ...prev,
        startX: rangeBtnRef?.current.getBoundingClientRect().x,
        scrollLeft: 0,
      }))

      setCurrentStep(prev => {
        const dist = rangePositions.limit / (steps - 1) / 2
        const nextStep = stepsSettings.filter(
          (step, idx) => Math.abs(x - step.bullet) <= dist,
        )?.[0]?.step
        if (onChangeStep) onChangeStep(nextStep, prev)
        return nextStep
      })
    }
    global.document.addEventListener('mousemove', handleMouseMove)
    global.document.addEventListener('mouseup', handleMouseUp)
    global.document.addEventListener('mouseleave', handleMouseUp)
    global.window.addEventListener('resize', handleMouseUp)
    global.document.addEventListener('touchmove', handleMouseMove)
    global.document.addEventListener('touchend', handleMouseUp)
    return () => {
      global.document.removeEventListener('mousemove', handleMouseMove)
      global.document.removeEventListener('mouseup', handleMouseUp)
      global.window.removeEventListener('resize', handleMouseUp)
      global.document.removeEventListener('mouseleave', handleMouseUp)
      global.document.removeEventListener('touchmove', handleMouseMove)
      global.document.removeEventListener('touchend', handleMouseUp)
    }
  }, [rangePositions.isDown, rangePositions.limit])

  return (
    <div className={`range-slider ${className}`}>
      <div className="range-slider-holder" ref={rangeHolder}>
        <div
          className="range-btn"
          ref={rangeBtnRef}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          role="button"
        >
          <>
            <IcoTouchHover
              className={`range-hover ${
                rangePositions.isDown ? 'is-down' : ''
              }`}
            />
            <IcoTouch className={`${rangePositions.isDown ? 'is-down' : ''}`} />
          </>
        </div>
        <div className="range-line">
          {stepsSettings.map((step, idx) => {
            return (
              <div
                className="range-milestone"
                key={`milestone${idx}`}
                role="button"
                onClick={() => {
                  onChangeStep(idx, currentStep)
                  goToStep(step)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
