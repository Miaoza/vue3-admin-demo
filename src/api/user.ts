import request from './index'
import { Map } from '@/interfaces'

/**
 * 查询用户列表
 * @param {Object} params
 * @returns {Promise}
 */
export function getUsers(params: Map): Promise<any> {
  return request('/users', {
    method: 'post',
    params
  })
}

/**
 * 查询指定用户
 * @returns {Promise}
 */
export function getUserById(id: number): Promise<any> {
  return request(`/users/${id}`, {
    method: 'get'
  })
}
