import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import CatalogHomeCondir from '@/views/CatalogHomeCondir.vue'
import CatalogInvertCondir from '@/views/CatalogInvertCondir.vue'
import CardProductView from '@/views/CardProductView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },

  {
    path: '/catalogHomeCondir',
    name: 'catalogHomeCondir',
    component: CatalogHomeCondir
  },

  {
    path: '/catalogInvertCondir',
    name: 'catalogInvertCondir',
    component: CatalogInvertCondir
  },
  {
    path: '/product/:id',
    name: 'cardProductView',
    component: CardProductView
  },


 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
