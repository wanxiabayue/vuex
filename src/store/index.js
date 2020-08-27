/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100,
    sex: "male",
    from: "china",
    myCmpted: "",
    arr: [2, 3, 1, 4, 6],
    name: 'zet',
  },
  getters,
  mutations: {
    // obj为载荷（也就是入参，建议对象形式，可以传入多个参数）
    SET_COUNT_increase(state, obj) {
      console.log('obj', obj)
      state.count += obj.num
    },
    SET_COUNT_decrease(state, obj) {
      state.count -= obj.num
    },
    fn(state, json) {
      state.name = json.first + json.second + state.name
    }
  },

  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  // TODO：异步如何传参
  actions: {
    incrementAsync: (context, obj) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('SET_COUNT_increase', obj)
          resolve()
        }, 1000)
      })
    },
    decrementAsync: ({ commit }, obj) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SET_COUNT_decrease', obj)
          resolve()
        }, 1000)
      })
    }
  },
  modules: {
  }
})

export default store
