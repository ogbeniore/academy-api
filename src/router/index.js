import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/new-movie',
    name: 'new-movie',
    component: () => import('../views/AddMovie.vue')
  },
  {
    path: '/view/:id',
    name: 'view-movie',
    component: () => import('../views/ViewMovie.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit-movie',
    component: () => import('../views/EditMovie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
