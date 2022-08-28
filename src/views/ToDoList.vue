<template>
  <div class="toDoList">
    <h1>To Do List</h1>
  </div>
  <div class="todoInput_container">
    <div class="todoInput">
      <input
        class="input"
        @keyup.enter="$store.commit('saveItem')"
        type="text"
        placeholder="To Do..."
        v-model="$store.state.newItem"
      />
      <button
        :disabled="$store.state.newItem.length === 0"
        @click="$store.commit('saveItem')"
      >
        Add To List
      </button>
    </div>
    <p class="counter">{{ NotDeletedItemsCount }}</p>
  </div>
  <div>
    <ListItem></ListItem>
  </div>
  <div>
    <button class="btn" @click="$router.push('/ToDoList/DeletedItems')">
      Deleted items
    </button>
  </div>
  <div>
    <button class="clearlist" @click="$store.commit('deleteItemsPermanently')">
      Permanently delete all items
    </button>
  </div>
</template>

<script>
  import ListItem from '@/components/item-list.vue'

  export default {
    name: 'ToDoList',
    components: {
      ListItem,
    },
    computed: {
      NotDeletedItemsCount() {
        return this.$store.state.item_list.filter(
          (item) => item.deleted == false
        ).length
      },
    },
  }
</script>

<style>
  .clearlist {
    margin-top: 100px;
    margin-bottom: 10px;
  }
  .todoInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 14px;
    margin-bottom: 34px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .counter {
    font-size: 30px;
    font-weight: bolder;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .todoInput_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 14px;
  }
</style>
