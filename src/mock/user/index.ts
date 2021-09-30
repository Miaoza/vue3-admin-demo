/******************
 * 用户 - mock
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
   * 用户 - 查询用户列表
   * @returns {Promise} {<pending>}
   **/
  'post|/api/users': (option: Map): ResponseType => {
    // const body = JSON.parse(option.body || JSON.stringify({}))
    console.log(option)
    if (option) {
      return {
        code: 0,
        msg: 'success',
        data: {
          total: 2,
          list: [
            {
              id: 1,
              username: 'testuser1',
              gender: '男',
              age: 18
            },
            {
              id: 2,
              username: 'testuser2',
              gender: '女',
              age: 18
            }
          ]
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
   * 基础 - 我的快捷入口列表
   * @returns {Promise} {<pending>}
   **/
  'get|/api/public/quick-entries/me': (option: Map): ResponseType => {
    // const body = JSON.parse(option.body || JSON.stringify({}))
    console.log(option)
    if (option) {
      return {
        code: 0,
        msg: 'success',
        data: {
          total: 5,
          list: []
        }
      }
    } else {
      return {
        code: -1,
        msg: '查询失败'
      }
    }
  }
}
