import { createWebHistory, createRouter } from 'vue-router'

import PageProducts from '@/pages/PageProducts.vue'
import PageFaceMain from '@/pages/PageFaceMain.vue'
import PageProduct from '@/pages/PageProduct.vue'
import PageCart from '@/pages/PageCart.vue'

const routes = [
  {
    path: '/',
    component: PageFaceMain,
    children: [
      {
        path: 'products',
        component: PageProducts,
      },
      {
        path: 'product/:id',
        component: PageProduct,
        props: true,
      },
      {
        path: 'cart',
        component: PageCart,
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
