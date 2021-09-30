import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getStorage } from '@/utils/storage'
import Core from '@/views/core'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import NoAuth from '@/views/403'
import users from './user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'core',
    component: Core,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '工作台'
        }
      },
      ...users
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: '工作台'
    }
  },
  {
    path: '/403',
    name: 'no-auth',
    component: NoAuth,
    meta: {
      title: '工作台'
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  const token = getStorage('token')
  if (to.name !== 'login' && !token) {
    next({ name: 'login' })
  } else if (to.path === '/') {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
