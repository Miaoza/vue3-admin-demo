import request from './index'
import { Map } from '@/interfaces'

/**
 * 查询快捷入口列表
 * @param {Object} params
 * @returns {Promise}
 */
export function getQuickEntries(params: Map): Promise<any> {
  return request('/quick-entries', {
    method: 'post',
    params
  })
}

/**
 * 查询我的快捷入口
 * @returns {Promise}
 */
export function getMyQuickEntries(): Promise<any> {
  return request('/quick-entries/me', {
    method: 'get'
  })
}
