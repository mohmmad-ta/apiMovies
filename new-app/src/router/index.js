import { createRouter, createWebHistory } from 'vue-router'
import NewProduct from '../views/NewProduct.vue'
import AllProduct from '../views/AllProduct.vue'
import Product from '../views/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/all',
      name: 'AllProducts',
      component: AllProduct
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
  ]
})

export default router
