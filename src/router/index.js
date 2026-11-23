import LlibreDetalls from '@/components/LlibreDetalls.vue'
import Exercici1 from '@/views/exercici1.vue'
import Exercici2 from '@/views/exercici2.vue'
import Exercici3 from '@/views/exercici3.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/exercici1',
      name: 'exercici1',
      component: Exercici1,
      children: [
        {
          path: ':llibreId',
          name: 'LlibreDetalls',
          component: LlibreDetalls
        }
      ]
    },
    {
      path: '/exercici2',
      name: 'exercici2',
      component: Exercici2
    },
    {
      path: '/exercici3',
      name: 'exercici3',
      component: Exercici3
    }
  ]
})

export default router