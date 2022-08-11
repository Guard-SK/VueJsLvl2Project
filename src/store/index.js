import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    item_list: [],
    newItem: '',
    isDeleted: false,
    isEditDisplayed: 'none'
  },
  getters: {
    item_list_value(state) {
      return state.item_list
    }
  },
  mutations: {
    saveItem(state) {
      state.item_list.push({id: state.item_list.length+1, message: state.newItem, deleted: state.isDeleted})
      state.newItem = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
