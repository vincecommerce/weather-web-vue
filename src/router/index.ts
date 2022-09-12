import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import WeatherView from '@/views/WeatherView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
    },
    {
      path: '/weather',
      name: 'WeatherView',
      component: WeatherView,
      beforeEnter: () => {
        return localStorage.getItem('token') !== null
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: NotFoundView,
    },
  ],
})

export default router
