import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/insights', component: () => import('../pages/Insights.vue') },
    { path: '/profile', component: () => import('../pages/Profile.vue') },
    { path: '/profile/blood', component: () => import('../pages/ProfileBlood.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
  ]
})

export default router
