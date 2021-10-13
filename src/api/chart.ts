import request from './index'
import { Map } from '@/interfaces'

/**
 * 查询产品汇总
 * @param {Object} params
 * @returns {Promise}
 */
export const getProductsSummary = (params: Map): Promise<any> =>
  request('/products/summary', {
    method: 'post',
    params
  })
