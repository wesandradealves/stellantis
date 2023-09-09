import ChevronDown from '/public/static/icons/arrow-down.svg'
import React from 'react'
import { pushEvent } from '../../utils/Tracking.Helpers'

interface ITabItemProps {
  title: string
  id: string
  onClick: () => void
  active: boolean
  children: JSX.Element | string
}

export function TabItemEl({
  title,
  id,
  children,
  onClick,
  active,
}: ITabItemProps) {
  return (
    <>
      <div
        id={id}
        className={`tab-item ${active ? 'active' : ''}`}
        onClick={() => {
          pushEvent({
            event: 'interaction',
            element: title,
            elementCategory: 'botao',
            pageSection: 'conteudo',
            pageSubsection: 'tudo-do-commander',
            interactionType: 'clique',
          })
          if (onClick) onClick()
        }}
      >
        <span>
          <ChevronDown />
          {title}
        </span>
      </div>
      <div className={`mobile-tab-content ${active ? 'active' : ''}`}>
        {children}
      </div>
    </>
  )
}

export const TabItem = React.memo(TabItemEl)
