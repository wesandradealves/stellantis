import { useCallback, useEffect } from 'react'
import { useAppStore } from '../../stores/app.store'
import { Button } from '../Button'
import ArrowRight from '/public/static/icons/right-sign.svg'

export function Cta({
  onClick,
  timeoutInMs = 3000,
}: {
  onClick: () => void
  timeoutInMs: number
}) {
  const { setScrollTop, showCta, setShowCta, menuOpened } = useAppStore()

  const handleSetShowCta = useCallback((shouldShow: boolean) => {
    return setShowCta(shouldShow && !menuOpened)
  }, [])

  const handleSetScrollTop = useCallback((scrollTop: number) => {
    return setScrollTop(scrollTop)
  }, [])

  useEffect(() => {
    let timer

    const handleScroll = () => {
      clearInterval(timer)

      timer = setTimeout

      handleSetShowCta(false)

      handleSetScrollTop(global.window.scrollY)

      return timer(() => {
        return handleSetShowCta(true)
      }, timeoutInMs)
    }

    global.window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      global.window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`cta ${showCta ? 'show' : ''}`}>
      <div>
        <Button
          text="Monte o seu"
          icon={() => <ArrowRight />}
          onClick={onClick}
          link="https://commander.jeep.com.br/monte.html#versao"
        />
      </div>
    </div>
  )
}
