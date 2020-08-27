/*eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面初始化，默认组件
import State from '../views/State.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'State',
    component: State
  },
  {
    path: '/index',
    name: 'State',
    // 重定向
    redirect: '/',
    component: State
  },
  {
    path: '/mapState',
    name: 'MapState',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MapState.vue')
  },
  {
    path: '/getters',
    name: 'Getters',
    component: () => import('../views/Getters.vue')
  },
  {
    path: '/mutations',
    name: 'Mutations',
    component: () => import('../views/Mutations.vue')
  },
  {
    path: '/actions',
    name: 'Actions',
    component: () => import('../views/Actions.vue')
  },
  {
    path: '/eventBus',
    name: 'EventBus',
    // 别名
    alias: "/bus",

    component: () => import('../views/EventBus.vue')
  },
  {
    path: '/css3/svg',
    name: 'Svg',
    component: () => import('../views/css3/Svg.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/errors/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router
