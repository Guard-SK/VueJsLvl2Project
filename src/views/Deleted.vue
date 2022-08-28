<template>
  <div class="toDoList">
    <h1>To Do List - Deleted Items</h1>
    <p>Click on reload icon to recover the items.</p>
  </div>
  <div>
    <DeletedItemList></DeletedItemList>
  </div>
  <div>
    <button class="btn" @click="$router.push({ name: 'ToDoList' })">
      Back to To Do List
    </button>
  </div>
</template>

<script>
  import DeletedItemList from '../components/deleted-item-list.vue'

  export default {
    name: 'DeletedItems',
    components: {
      DeletedItemList,
    },
  }
</script>
