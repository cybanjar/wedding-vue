import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dark-mode',
    name: 'DarkMode',
    component: () => import(/* webpackChunkName: "about" */ '../views/DarkMode.vue')
  },
  {
    path: '/welcome-vika',
    name: 'WelcomeVika',
    component: () => import('../views/WelcomeVika.vue')
  },
  {
    path: '/wedding-vika',
    name: 'weddingVika',
    component: () => import('../views/WeddingVika.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
