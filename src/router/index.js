import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home', 
    component: HomeView
  },
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: () => import(/* webpackChunkName: "ToDoList" */ '../views/ToDoList.vue')
  },
  {
    path: '/RockPaperScissors',
    name: 'RockPaperScissors',
    component: () => import(/* webpackChunkName: "RockPaperScissors" */ '../views/RockPaperScissors.vue')
  },
  {
    path: '/ToDoList/DeletedItems',
    name: 'DeletedItems',
    component: () => import(/* webpackChunkName: "DeletedItems" */ '../views/Deleted.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
