<template>
  <div class="toDoList">
    <h1>To Do List</h1>
  </div>
  <div>
    <input class="input" @keyup.enter="$store.commit('saveItem')" type="text" placeholder="To Do..." v-model="$store.state.newItem">
    <div>
      <button :disabled="$store.state.newItem.length === 0" @click="$store.commit('saveItem')">Add To List</button>
    </div>
  </div>
  <div>
    <ListItem></ListItem>
  </div>
  <div>
    <button class="btn" @click="$router.push({name:'DeletedItems'})">Deleted items</button>
  </div>
  <div>
    <button class="clearlist" @click="$store.state.item_list = []">Permanently delete all items</button>
  </div>
</template>

<script>
import ListItem from '@/components/item-list.vue'

export default {
  name: 'ToDoList',
  components: {
    ListItem
},
  data (){
    return {

    }
  },
  methods: {
  }
}
</script>

<style>

.clearlist {
  margin-top: 100px;
  margin-bottom: 10px;
}

</style>