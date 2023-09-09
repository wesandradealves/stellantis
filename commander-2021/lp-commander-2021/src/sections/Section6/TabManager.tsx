import { useEffect } from 'react'
import { TRoutes, useAppStore } from '../../stores/app.store'
import { TabItem } from './TabItem'
import { useSection6Store } from './useSection6Store'

export interface ITabElement {
  id: string
  title: string
  Component: () => JSX.Element
}

interface ITabManagerProps {
  tabs: ITabElement[]
}

export function TabManager({ tabs }: ITabManagerProps) {
  const { selectedTab, setSelectedTab, setTabs } = useSection6Store()
  const { setCurrentSection } = useAppStore()

  useEffect(() => {
    setTabs(tabs)
  }, [])

  return (
    <div className="tab-manager">
      {tabs.map((currentTab, idx) => {
        const isActive = selectedTab === idx

        return (
          <TabItem
            key={currentTab.title}
            id={currentTab.id}
            active={isActive}
            onClick={() => {
              if (selectedTab !== idx) {
                setSelectedTab(idx)
                window.history.pushState(
                  null,
                  currentTab.title,
                  `#commander-${currentTab.id}`,
                )
                setCurrentSection(`commander-${currentTab.id}` as TRoutes)
              }
              return null
            }}
            title={currentTab.title}
          >
            <currentTab.Component />
          </TabItem>
        )
      })}
    </div>
  )
}
