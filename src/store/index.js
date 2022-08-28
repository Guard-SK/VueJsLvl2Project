import { createStore } from 'vuex'

export default createStore({
	state: {
		counter: 0,
		item_list: [],
		newItem: '',
		isDeleted: false,
		isEditingActive: false,
		editText: '',
		editObject: {},
		filtered_item_list: 0
	},
	getters: {
		item_list_value(state) {
			return state.item_list
		}
	},
	mutations: {
		saveItem(state) {
			state.item_list.push({ id: state.item_list.length + 1, message: state.newItem, deleted: state.isDeleted })
			let id = state.item_list.length
			state.editObject[id.toString()] = true
			state.newItem = ''
		},
		editItem(state, id, msg) {
			if (state.isEditingActive != true && state.editObject[id.toString()] == true) {
				state.isEditingActive = true
				state.editText = msg
				state.editObject[id.toString()] = !state.editObject[id.toString()]
			}
		},
		submitBtn(state, id) {
			state.editText = ''
			state.isEditingActive = false
			state.editObject[id.toString()] = true
		},
		deleteItemsPermanently(state) {
			state.editObject = {}
			state.item_list = []
		},
		deleteOneItemPermanently(state, id) {
			if (confirm('Are you sure you want to permanently delete this item?')) {
				state.item_list.splice(id - 1, 1)
			}
		}
	},
	actions: {
	},
	modules: {
	}
})
