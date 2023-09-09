import create from 'zustand'
import { ITabElement } from './TabManager'

interface ISection6Store {
  tabs: ITabElement[]
  selectedTab: number
  selectedImage: number
  setTabs: (tabs: ITabElement[]) => void
  setSelectedTab: (selectedTab: number) => void
  setSelectedImage: (selectedImage: number) => void
  setSelectedTabById: (selectedId: string) => void
}

export const useSection6Store = create<ISection6Store>(set => ({
  tabs: [],
  selectedTab: 0,
  selectedImage: 0,
  setTabs: (tabs: ITabElement[]) => set({ tabs }),
  setSelectedTab: selectedTab => set({ selectedTab, selectedImage: 0 }),
  setSelectedImage: selectedImage => set({ selectedImage }),
  setSelectedTabById: selectedId =>
    set(prevState => ({
      selectedTab: prevState.tabs.find(
        currentTab => currentTab.id === selectedId,
      )
        ? prevState.tabs.findIndex(currentTab => currentTab.id === selectedId)
        : 0,
      selectedImage: 0,
    })),
}))
