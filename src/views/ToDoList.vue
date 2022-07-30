<template>
  <div class="toDoList">
    <h1>To Do List</h1>
  </div>
  <div>
    <button class="btn" @click="num++">XD</button>
    <p>{{num}}</p>
    <button class="btn_reset" @click="num = 0">RESET</button>
  </div>
  <button @click="$router.push('/RockPaperScissors')">RockPaperScissors</button>
</template>

<script>
export default {
  name: 'ToDoList',
  components: {

  },
  data (){
    return {
      num: 0
    }
  },
  methods: {

  }
}
</script>

<style>

.btn_reset {
  margin-bottom: 20px;
}

</style>