import { Map } from '@/interfaces'

/**
 * 校验手机号码
 * @param {String} phone
 * @returns {Boolean}
 */
export function validPhone(phone: string): boolean {
  return /^1[3456789]\d{9}$/.test(phone)
}

/**
 * 判断是否是空对象
 * @param {Any} value
 * @returns {Boolean}
 */
export function isEmptyObject(value: Map | any[]): boolean {
  const KEYS = typeof value === 'object' ? Object.keys(value) : ''
  return !!KEYS.length
}
