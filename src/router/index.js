/*eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面初始化，默认组件
import State from '../views/vuex/State.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Life',
    component: () => import('../views/lifeCycle.vue')
  },
  {
    path: '/index',
    name: '',
    // 重定向(通过redirect重定向的),2种常见方式
    // redirect: '/eventBus',
    redirect: { name: 'EventBus' },
    component: State
  },
  {
    path: '/state',
    name: 'State',
    component: State
  },
  {
    path: '/vuex/mapState',
    name: 'MapState',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vuex/MapState.vue')
  },
  {
    path: '/vuex/getters',
    name: 'Getters',
    component: () => import('../views/vuex/Getters.vue')
  },
  {
    path: '/vuex/mutations',
    name: 'Mutations',
    component: () => import('../views/vuex/Mutations.vue')
  },
  {
    path: '/vuex/actions',
    name: 'Actions',
    component: () => import('../views/vuex/Actions.vue')
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
