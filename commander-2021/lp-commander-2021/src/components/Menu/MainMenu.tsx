import React, { useCallback, useEffect, useRef, useState } from 'react'
import MenuList from '../../mocks/menuList'
import Jeep from '/public/static/images/jeep-logo.svg'
import ArrowRight from '/public/static/icons/right-sign.svg'
import MenuIcon from '/public/static/icons/menu.svg'
import Close from '/public/static/icons/close-stroke.svg'
import MenuLink from '../../mocks/menuLink'
import { Button } from '../Button'
import { IMenuProps } from './Menu.types'
import { useAppStore } from '../../stores/app.store'
import { isSSR, pushEvent } from '../../utils/Tracking.Helpers'

export const Menu = ({ onClickItem }: IMenuProps): JSX.Element => {
  const [headerFixed, setHeaderFixed] = useState(false)
  const headerMenuRef = useRef<HTMLInputElement>()
  const {
    scrollTop,
    setScrollTop,
    setShowCta,
    setMenuOpened,
    menuOpened,
    currentSection,
  } = useAppStore()

  const handleSetScrollTop = useCallback((scrollTop: number) => {
    return setScrollTop(scrollTop)
  }, [])

  const trackCTA = (text: string): void => {
    pushEvent({
      event: 'interaction',
      element: text,
      elementCategory: 'cta',
      pageSection: 'conteudo',
      pageSubsection: 'menu',
      interactionType: 'clique',
    })
  }

  useEffect(() => {
    setHeaderFixed(
      scrollTop > headerMenuRef?.current?.offsetHeight &&
      global.window.innerWidth < 1025,
    )
  }, [scrollTop])

  useEffect(() => {
    if (menuOpened) {
      setShowCta(false)
      global.document.body.style.overflowY = 'hidden'
    } else {
      global.document.body.style.overflowY = 'auto'
    }
  }, [menuOpened])

  useEffect(() => {
    const handleScroll = () => {
      handleSetScrollTop(global.window.scrollY)
    }

    const handleResize = () => {
      if (global.window.innerWidth > 1024) {
        setMenuOpened(false, false)
      }
    }

    global.window.addEventListener('scroll', handleScroll)
    global.window.addEventListener('resize', handleResize)

    return () => {
      global.window.removeEventListener('resize', handleResize)
      global.window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="wrapper-menu">
      <header
        className={`${headerFixed ? 'sticky' : ''} ${menuOpened ? 'opened' : ''
          }`}
      >
        <div className={`header-jeep`} ref={headerMenuRef}>
          <div
            className={`btn-menu ${menuOpened ? 'opened' : ''}`}
            aria-label="Menu"
            role="button"
            onClick={() => setMenuOpened(!menuOpened)}
          >
            {menuOpened ? <Close /> : <MenuIcon />}
          </div>
          <a href="https://www.jeep.com.br/" aria-label="Jeep">
            <Jeep />
          </a>
        </div>
        <nav className={`main-nav ${menuOpened ? 'opened' : ''}`}>
          <a href="https://www.jeep.com.br/" aria-label="Jeep">
            <Jeep />
          </a>
          <ul>
            {MenuList.map(menuItem => {
              const activeSubItem = currentSection.includes(menuItem.id)

              const isCommanderTopLevel =
                menuItem.id === 'commander' && !isSSR()
                  ? window.location.pathname.includes('/commander')
                  : false

              if (menuItem.subMenu) {
                return (
                  <li
                    key={menuItem.id}
                    className={`submenu ${isCommanderTopLevel ? 'active-header-menu' : ''
                      }`}
                  >
                    <a
                      href="#https://lp-commander-2021.vercel.app/#commander-sofisticacao"
                      className={`no-anchor main-subitem ${activeSubItem ? 'active-sub-menu' : ''
                        }`}
                    // onClick={() => onClickItem(menuItem)}
                    >
                      {menuItem.title}
                    </a>
                    <ul>
                      {menuItem.subMenu.map(submenu => {
                        const activeSubSubItem =
                          currentSection === `commander-${submenu.id}`

                        return (
                          <li key={submenu.id}>
                            <a
                              className={`${menuItem.main ? 'main-item' : ''} ${activeSubSubItem ? 'active-sub-menu' : ''
                                }`}
                              onClick={() => onClickItem(submenu, menuItem)}
                              role="button"
                            >
                              <span>&#8226;</span>
                              {submenu.title}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              }

              const activeItem =
                menuItem.id === 'jeep-commander' && currentSection === '/'
                  ? true
                  : currentSection.includes(menuItem.id) ||
                  menuItem.children?.includes(currentSection)

              return (
                <li
                  key={menuItem.id}
                  className={`${activeItem ? 'active-menu' : ''}`}
                >
                  <a
                    className={`${activeItem ? 'active-menu' : ''}`}
                    role="button"
                    onClick={() => {
                      onClickItem(menuItem)
                    }}
                  >
                    {menuItem.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="menu-links-wrapper">
            {MenuLink.map(link => (
              <Button
                text={link.name}
                link={link.link}
                key={link.name}
                prefix={!!link.icon && <>{link.icon}</>}
                icon={() => <ArrowRight />}
                className={!!link.inverted ? 'inverted' : ''}
                onClick={() => trackCTA(link.name)}
              />
            ))}
          </div>
        </nav>
      </header>
    </div>
  )
}
