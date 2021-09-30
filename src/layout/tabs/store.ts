import { reactive } from 'vue'
import { Map } from '@/interfaces'

const currentTab: Map = {}
const tabs: any[] = []

// 响应式状态
export const store = reactive({
  currentTab,
  tabs
})

export const mutations = {
  getCurrentTab(): Map {
    return store.currentTab
  },
  getTabs(): any[] {
    return store.tabs || []
  },
  addTab(route: Map): void {
    const path = route.path
    if (store.tabs.every((tab: Map) => tab.path !== path)) {
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
    console.log('reduceTab:::>', store.tabs)
    const nextIndex = index < store.tabs.length ? index : index - 1
    mutations.setCurrentTab(store.tabs[nextIndex > -1 ? nextIndex : 0])
  },
  setCurrentTab(tab: Map): void {
    store.currentTab = {
      ...tab
    }
  }
}
