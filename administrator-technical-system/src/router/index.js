import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'LogIn'
    },
    component: LogIn
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/HomeScaffold',
    component: () => import('../views/pages/HomeScaffold.vue'),
    redirect: '/WelcomePage',
    children: [
      {
        path: '/WelcomePage',
        component: () => import('../views/pages/WelcomePage.vue')
      },
      {
        path: '/AnnouncementPage',
        component: () => import('../views/pages/AnnouncementPage.vue')
      },
      {
        path: '/AccountManagement',
        component: () => import('../views/pages/AccountManagement.vue')
      },
      {
        path: '/ResourceManagement',
        component: () => import('../views/pages/ResourceManagement.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
