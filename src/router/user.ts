import User from '@/views/user'
import UserForm from '@/views/user/user-form'

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

export const userPageRouter: any[] = [
  {
    path: '/user/form/:id',
    name: 'user/form',
    component: UserForm,
    meta: {}
  }
]
