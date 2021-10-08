import Set from '@/views/set'
import SetUser from '@/views/set-user'

export default [
  {
    path: '/set/basic',
    name: 'set/basic',
    component: Set,
    meta: {
      title: '基础设置',
      icon: ''
    }
  },
  {
    path: '/set/user',
    name: 'set/user',
    component: SetUser,
    meta: {
      title: '用户设置',
      icon: ''
    }
  }
] as any[]
