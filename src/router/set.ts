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
  },
  {
    path: '/set/user1',
    name: 'set/user1',
    component: SetUser,
    meta: {
      title: '用户设置1',
      icon: ''
    }
  },
  {
    path: '/set/user2',
    name: 'set/user2',
    component: SetUser,
    meta: {
      title: '用户设置2',
      icon: ''
    }
  }
] as any[]
