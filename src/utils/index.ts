/**
 * 校验手机号码
 * @param {String} phone
 * @returns {Boolean}
 */
export function validPhone(phone: string): boolean {
  return /^1[3456789]\d{9}$/.test(phone)
}
