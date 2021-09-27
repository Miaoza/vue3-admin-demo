import { InjectionKey } from 'vue'
import { Store, createStore, ModuleTree, useStore as baseUseStore } from 'vuex'
import { Map } from '@/interfaces'

const moduleFiles = require.context('./modules', true, /\.ts$/)

const modules = moduleFiles.keys().reduce((pre: ModuleTree<Map>, filePath) => {
  const filename = filePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = moduleFiles(filePath)
  pre[filename] = value.default
  return pre
}, {})

// export interface State {
//   [key: string]: unknown
// }

// 定义 injection key
export const key: InjectionKey<Store<Map>> = Symbol()

export default createStore<Map>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...modules
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore(): Store<Map> {
  return baseUseStore(key)
}
