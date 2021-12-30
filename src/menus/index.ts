import { HomeFilled, UserFilled, Histogram, Tools } from '@element-plus/icons'

export default [
  {
    title: '主页',
    path: '/home',
    icon: HomeFilled
  },
  {
    title: '用户',
    path: '/user',
    icon: UserFilled,
    children: [
      {
        title: '用户列表',
        path: '/user/list'
      }
    ]
  },
  {
    title: '数据',
    path: '/dashboard',
    icon: Histogram
    // children: [
    //   {
    //     title: '可视化图',
    //     path: '/dashboard/chart',
    //     children: [
    //       {
    //         title: '图1',
    //         path: '/dashboard/chart/1'
    //       },
    //       {
    //         title: '图2',
    //         path: '/dashboard/chart/2'
    //       }
    //     ]
    //   },
    //   {
    //     title: '表格',
    //     path: '/dashboard/table'
    //   }
    // ]
  },
  {
    title: '设置',
    path: '/set',
    icon: Tools,
    children: [
      {
        title: '基础参数',
        path: '/set/basic'
      },
      {
        title: '用户属性',
        path: '/set/user'
      },
      {
        title: '用户属性1',
        path: '/set/user1'
      },
      {
        title: '用户属性2',
        path: '/set/user2'
      }
    ]
  }
]
