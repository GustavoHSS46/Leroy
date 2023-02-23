import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sections from '../views/Sections.vue'
import Product from '../views/Product.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/section/:id',
    name: 'section',
    component: Sections,
    props: true
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
