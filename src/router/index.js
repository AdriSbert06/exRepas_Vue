import LlibreDetalls from '@/components/LlibreDetalls.vue'

import Extra1 from '@/exExtra/extra1.vue'
import Extra1_props from '@/exExtra/extra1_props.vue'
import Extra2 from '@/exExtra/extra2.vue'
import Extra3 from '@/exExtra/extra3.vue'

import PeliculaDetalls from '@/exExtra/PeliculaDetalls.vue'

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
    },

    {
      path: 'extra1',
      name: 'extra1',
      component: Extra1,
      children: [
        {
          path: 'peliculaId',
          name: 'PeliculaDetalls',
          component: PeliculaDetalls
        }
      ]
    },
    {
      path: 'extra2',
      name: 'extra2',
      component: Extra2
    },
    {
      path: 'extra3',
      name: 'extra3',
      component: Extra3
    },

    {
      path: 'extra1_props',
      name: 'extra1_props',
      component: Extra1_props
    }
  ]
})

export default router