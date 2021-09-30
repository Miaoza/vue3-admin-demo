/******************
 * 权限 - mock
 *****************/

type Map = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

type ResponseType = {
  code: number
  msg?: string
  data?: Map
}

export default {
  /**
   * 登录
   * @param {Object} option
   * @returns {Promise} {<pending>}
   **/
  'post|/api/login': (option: Map): ResponseType => {
    // const { phone, pwd } = JSON.parse(option.body || JSON.stringify())
    const body = JSON.parse(option.body || JSON.stringify({}))
    console.log(body)
    const { phone, pwd } = body || {}
    if (phone === '13666666666' && pwd === '123456') {
      return {
        code: 0,
        msg: 'success',
        data: {
          token: window.btoa(`${phone}---000---${pwd}`)
        }
      }
    } else {
      return {
        code: -1,
        msg: '账号或密码错误'
      }
    }
  },
  /**
   * 查询登录用户信息
   * @param {Object} option
   * @returns {Promise} {<pending>}
   **/
  'get|/api/me': (option: Map): ResponseType => {
    const token = option.url.split('token')[1]
    if (token && token.length > 1) {
      return {
        code: 0,
        msg: '成功',
        data: {
          id: 1,
          username: '喵砸',
          phone: '13666666666',
          avatarUrl:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          remark: '',
          createAt: '2021-09-26 09:09:09'
        }
      }
    } else {
      return {
        code: -1,
        msg: '未登录'
      }
    }
  }
}
