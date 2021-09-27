// import { AxiosResponse } from 'axios'
import request from './index'
import { Map } from '@/interfaces'

/**
 * 登录
 * @param {Object} params
 * @returns {Promise}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function login(params: Map): Promise<any> {
  return request('/login', {
    method: 'post',
    params
  })
}

/**
 * 登录
 * @param {String} token
 * @returns {Promise}
 */
export function getMe(token: string): Promise<any> {
  return request('/me', {
    method: 'get',
    params: {
      token
    }
  })
}
