<template>
  <div class="container">
    <div class="home">
      <h1>Hello</h1>
    </div>
    <div class="todolistLink_container">
      <p>
        This to do list is a level 3 Vue project. It is not fully completed.
        <br />
        Click on the button to go there or use top navigation bar
      </p>
      <button class="btn" @click="$router.push('/ToDoList')">To Do List</button>
    </div>
    <div class="rockpaperscissorsLink_container">
      <p>
        Rock, Paper and Scissors game is just a recreation of level 2 javascript
        project made into Vue.js. It has nothing to do with any Vue.js project,
        it is purely made for fun.<br />
        Click on the button to go there or use top navigation bar
      </p>
      <button class="btn" @click="$router.push('/RockPaperScissors')">
        RockPaperScissors
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
  }
</script>
<style>
  .rockpaperscissorsLink_container {
    margin-top: 26px;
  }
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
