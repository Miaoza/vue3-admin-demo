import * as cache from '@/utils/storage'
import { ActionContext } from 'vuex'
import { Map } from '@/interfaces'
import router from '@/router'

export default {
  namespace: 'auth',
  state: {
    token: cache.getStorage('token') || '',
    me: cache.getStorage('me') || {}
  },
  mutations: {
    setToken(state: Map, payload: string | undefined): void {
      state.token = payload || ''
      // const date = new
    },
    clearToken(state: Map): void {
      state.token = ''
    },
    setMe(state: Map, payload: Map): void {
      state.me = payload || {}
    },
    clearMe(state: Map): void {
      state.me = {}
    }
  },
  actions: {
    changeToken(
      { commit }: ActionContext<Map, unknown>,
      payload: string
    ): void {
      commit('setToken', payload)
      cache.setSotrage('token', payload)
    },
    changeMe({ commit }: ActionContext<Map, unknown>, payload: Map): void {
      commit('setMe', payload)
      cache.setSotrage('me', payload || {})
    },
    logout(context: ActionContext<Map, unknown>): void {
      context.commit('clearMe')
      context.commit('clearToken')
      cache.clearStorage()
      cache.clearSession()
      router.push({ name: 'login' })
    }
  }
}
