/**
 * Mock配置文件
 **/
// 首先引入Mock
const Mock = require('mockjs')

type ObjectType = {
  [key: string]: unknown
  [key: number]: unknown
}

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

let configArray: ObjectType[] = []

// 使用webpack的require.context()遍历所有Mock文件
const files = require.context('.', true, /\.ts$/)
files.keys().forEach((key) => {
  if (key === './index.ts') return
  configArray = configArray.concat(files(key).default)
})

// 注册所有的Mock服务
configArray.forEach((item) => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|')
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
  }
})
