/**
 * 设置缓存值
 * @param {Any} value
 * @returns {String}
 */
function setValue(value: unknown, expire: number | string | Date): string {
  const obj = {
    create: new Date().getTime(),
    value,
    expire
  }
  return JSON.stringify(obj)
}

/**
 * 判断是否过期
 * @param {Number} create 创建时间
 * @param {Number | String | Date} expire 过期时间
 * @returns {Boolean}
 */
function isExpires(create: number, expire: number | string | Date): boolean {
  const lastTime = expire ? new Date(expire).getTime() : 0
  return !!lastTime && lastTime < create
}

/**
 * 设置持久缓存
 * @param {String} key
 * @param {Any} value
 * @param {Number | String | Date} expire 过期时间
 */
export function setSotrage(
  key: string,
  value: unknown,
  expire: number | string | Date = 0
): void {
  localStorage.setItem(key, setValue(value, expire))
}

/**
 * 查询指定持久缓存数据
 * @param {String} key
 * @returns {Any}
 */
export function getStorage(key: string): unknown {
  const OBJ = JSON.parse(localStorage.getItem(key) || JSON.stringify({}))
  if (isExpires(OBJ.create, OBJ.expire)) {
    localStorage.removeItem(key)
    throw '已过期'
  }
  const value = OBJ.value
  return value
}

/**
 * 移除指定持久缓存
 * @param {String} key
 */
export function removeStorage(key: string): void {
  localStorage.removeItem(key)
}

/**
 * 移除本地持久缓存
 */
export function clearStorage(): void {
  localStorage.clear()
}

/**
 * 设置临时缓存
 * @param {String} key
 * @param {Any} value
 */
export function setSession(key: string, value: unknown): void {
  sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * 查询指定临时缓存数据
 * @param {String} key
 * @returns {Any}
 */
export function getSession(key: string): unknown {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : value
}

/**
 * 移除指定临时缓存
 * @param {String} key
 */
export function removeSession(key: string): void {
  sessionStorage.removeItem(key)
}

/**
 * 移除本地临时缓存
 */
export function clearSession(): void {
  sessionStorage.clear()
}
