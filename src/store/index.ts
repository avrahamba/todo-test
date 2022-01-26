import Vuex from 'vuex'
import todoStore from './todos.store';

export default Vuex.createStore({
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
});
