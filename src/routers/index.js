import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurant-menu',
    name: 'RestaurantMenu',
    component: () => import('../views/RestaurantView.vue')
  },
  {
    path: '/food/:name',
    name: 'RestaurantDetail',
    component: () => import('../views/RestaurantDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')  // <- ini baru
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
