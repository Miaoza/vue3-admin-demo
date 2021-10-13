/******************
 * 图表 - mock
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
   * 查询柱状图数据
   * @returns {Promise} {<pending>}
   **/
  'post|/api/products/summary': (option: Map): ResponseType => {
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
              name: 'product1',
              num: 18
            },
            {
              id: 2,
              name: 'product2',
              num: 22
            },
            {
              id: 3,
              name: 'product3',
              num: 5
            },
            {
              id: 4,
              name: 'product4',
              num: 14
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
  }
}
