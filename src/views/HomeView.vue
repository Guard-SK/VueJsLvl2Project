<template>
<div class="container">
  <div class="home">
    <h1>Hello</h1>
    <p>Go to one of the links</p>
  </div>
  <div class="nav_btn">
    <button class="btn" @click="$router.push({name:'ToDoList'})">To Do List</button>
    <button class="btn" @click="$router.push({name:'RockPaperScissors'})">RockPaperScissors</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'ToDoList',
  components: {

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
.btn {
  box-shadow: 5px;
  margin: 10px;
  width: 50%;
}
.nav_btn {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>