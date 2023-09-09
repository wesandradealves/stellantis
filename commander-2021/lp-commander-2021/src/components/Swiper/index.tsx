import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperComponent } from 'swiper/types/shared'

export type TSwiperItem = {
  Component: (props: any) => JSX.Element
  sliderData?: any
}

interface IJeepSwiperProps {
  swiperItems: TSwiperItem[]
  onSlideChange?: () => void
  current?: number | string
  setCurrent?: (current: number | string) => void
  onSwiper?: (swiper: SwiperComponent) => void
  sliderData?: any
  className?:
    | string
    | {
        readonly [key: string]: string
      }
}

export function JeepSwiper({
  swiperItems,
  className,
  onSlideChange,
  onSwiper,
  current,
  setCurrent,
}: IJeepSwiperProps) {
  const handleSlideChange = swiper => {
    onSlideChange?.()
  }

  const isActive = (
    current: string | number,
    idx: number,
    ref?: string,
  ): boolean => {
    if (typeof current === 'string') {
      return current === `${ref}`
    }

    return current === idx
  }

  return (
    <Swiper
      className={`swiper-container ${className}`}
      slidesPerView={'auto'}
      spaceBetween={0}
      allowTouchMove={true}
      onSlideChange={handleSlideChange}
      onSwiper={onSwiper}
      breakpoints={{
        '768': {
          enabled: false,
          slidesPerView: swiperItems.length,
          spaceBetween: swiperItems.length * 2,
        },
      }}
    >
      {swiperItems?.map((swiperItem, idx) => {
        return useMemo(
          () => (
            <SwiperSlide key={idx} className="swiper-slide">
              <swiperItem.Component
                swiperItem={swiperItem}
                active={isActive(current, idx, swiperItem?.sliderData?.ref)}
                onClick={() => {
                  setCurrent(
                    typeof current === 'string'
                      ? `${swiperItem?.sliderData?.ref}`
                      : idx,
                  )
                }}
              />
            </SwiperSlide>
          ),
          [idx, current, swiperItem],
        )
      })}
    </Swiper>
  )
}
