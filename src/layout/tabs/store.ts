import { reactive } from 'vue'
import { Map } from '@/interfaces'

const currentTab: Map = {}
const tabs: any[] = []

const HOMETAB = {
  path: '/home',
  title: '工作台',
  query: {},
  params: {}
}

// 响应式状态
export const store = reactive({
  currentTab,
  tabs
})

export const mutations = {
  clearTabs(): void {
    store.tabs = []
    mutations.setCurrentTab(HOMETAB)
  },
  getTabs(): any[] {
    return store.tabs || []
  },
  addTab(route: Map): void {
    const path = route.path
    if (store.tabs.every((tab: Map) => tab.path !== path) && path !== 'home') {
      store.tabs.push({
        path: route.path,
        title: route.meta.title,
        icon: route.meta.icon || '',
        query: route.query,
        params: route.params
      })
    }
  },
  reduceTab(tab: Map): void {
    const index = store.tabs.findIndex((item) => item.path === tab.path)
    store.tabs.splice(index, 1)
    const nextIndex = index < store.tabs.length ? index : index - 1
    const currentTab = store.tabs[nextIndex > -1 ? nextIndex : 0] || HOMETAB
    store.currentTab.path === tab.path && mutations.setCurrentTab(currentTab)
  },
  reduceOther(tab: Map): void {
    store.tabs = [tab]
    mutations.setCurrentTab(tab)
  },
  reduceRight(tab: Map, index: number): void {
    mutations.setCurrentTab(tab)
    const len = store.tabs.length
    index < len - 1 && store.tabs.splice(index + 1, len - (index + 1))
  },
  getCurrentTab(): Map {
    return store.currentTab
  },
  setCurrentTab(tab: Map): void {
    store.currentTab = {
      ...tab
    }
  }
}
