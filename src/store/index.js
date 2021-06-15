import Vue from 'vue'
import Vuex from 'vuex'
import todoStore from './todos.store';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: ''
  },
  getters: {
    name({ name }) {
      return name
    }
  },
  mutations: {
    setName(state, name) {
      state.name = name
    }
  },
  actions: {
    init({ commit }) {
      const name = localStorage.getItem('name')
      if (name) commit('setName', name)
    },
    setName({ commit },name) {
      localStorage.setItem('name',name)
      commit('setName',name)
    }
  },
  modules: {
    todoStore
  }
})
