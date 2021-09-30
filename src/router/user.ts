import User from '@/views/user'

export default [
  {
    path: '/user/list',
    name: 'user/list',
    component: User,
    meta: {
      title: '用户列表',
      icon: ''
    }
  }
] as any[]
